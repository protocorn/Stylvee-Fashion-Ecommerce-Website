import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import config from '../../../utils/config';
import { signToken } from '../../../utils/auth';
import client from '../../../utils/client';
import nodemailer from "nodemailer";

const handler = nc();

handler.post(async (req, res) => {
    const projectId = config.projectId;
    const dataset = config.dataset;
    const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;

    const createMutations = [{
        create: {
            _type: 'user',
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isAdmin: false
        }
    }];
    const existUser = await client.fetch(
        `*[_type == "user" && email == $email][0]`,
        {
            email: req.body.email,
        }
    );
    if (existUser) {
        return res.status(401).send({ message: 'Email aleardy exists' });
    }
    const { data } = await axios.post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
        { mutations: createMutations },
        {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${tokenWithWriteAccess}`
            },
        }
    );
    const userId = data.results[0].id;
    const user = {
        _id: userId,
        name: req.body.name,
        email: req.body.email,
        isAdmin: false,
    };

    const token = signToken(user);
    res.send({ ...user, token })

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      });
    
      try {
        await transporter.sendMail({
          from: "stylvee@gmail.com",
          to: req.body.email,
          subject: `Verification Link For Stylvee Account`,
          html: `<h1>http://localhost:3000?token=${token}</h1>`
        });
      } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
      }
      return res.status(200).json({ error: "" });
});

export default handler;