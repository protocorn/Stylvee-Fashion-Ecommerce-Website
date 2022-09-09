import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import config from '../../../utils/config';

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
            password: bcrypt.hashASync(req.body.password),
            isAdmin: false
        }
    }];
    const { data } = await axios.post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
        {
            headers: {
                'Content-type':'application/json',
                Authorization: `Bearer ${tokenWithWriteAccess}`
            }
        }
    );
    const userid = data.results[0].id;
    const user={
        _id: userid,
        name: req.body.name,
        email: req.body.email,
        isAdmin: false,
    };

    const token=signToken(user);
    res.sendDate({...user,token})
})

export default handler;