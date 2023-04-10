const {spawn} = require('child_process');

export default function handler(req, res) {
    const prod = "Black T-Shirt";
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['ml_model/products_recommendation.py',prod]);
    // collect data from script
    python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    });
    const l1=[]
    var count=0;
    var temp="";
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    for (let i in dataToSend){
        if(dataToSend[i]!="\n"){
            temp+=dataToSend[i];
        }
        else{
            l1[count]=temp
            count+=1
            temp=""
        }
    }
    res.json({products:l1})
});
}