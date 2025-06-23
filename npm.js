const express = require('express');
const colors = require('colors');
const qrcode = require('qrcode-terminal')
const spooky = express();
const port = "8080";
const  host = "http://localhost:8080/"
spooky.use(express.static('server'));

qrcode.generate(host, {small: true}, function (qrcode){
console.log(qrcode);
})

spooky.listen(port, () =>{
console.log(`server running in = > http://localhost:${port}`.white.bold);
})
