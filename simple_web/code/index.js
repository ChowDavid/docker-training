const express = require("express");
const redis = require('redis');

const app = express();
const client = redis.createClient();

client.on("connect", function() {
    console.log("You are now connected");
  });
  
client.set('visit',0);

app.get('/',(req,res)=>{
    client.get('visit',(e,v)=>{
        res.send('Hi There'+ v);
        client.set('visit',parseInt(v)+1);
    });
});

app.listen(8080,() => {
    console.log("Listen on port 8080");
});