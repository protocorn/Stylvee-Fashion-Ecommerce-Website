import Cookies from 'js-cookie';
import express from 'express'
import {spawn} from 'child_process'

const app = express()
const port=3002
const product = Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : null;

app.get('/', (req, res) => {
 
 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('python', ['ml_model/products_recommendation.py',product]);
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 res.send(dataToSend)
 });
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))
