require('dotenv').config()



const express = require('express');
const app = express();

let timeStamp;

const timeStamper = (req,res,next) =>{
    timeStamp = Date.now();
    console.log("Time stamp is " + timeStamp);
    next();
}

app.use(timeStamper);

app.get('/',(req,res)=>{
    res.send(`Hello. The time stamp is: ${timeStamp}`)
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server started and listening at port " + process.env.SERVER_PORT );
})
