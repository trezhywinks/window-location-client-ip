// npm install .
const express = require('express');
const colors = require('colors');
const http = require('http');
const qrcode = require('qrcode-terminal')
const spooky = express();
const port = "4040";
const  host = "http://localhost:4040/"
spooky.use(express.static('server'));

spooky.get(('/server'), (req, res)  => {
const userIp = req.headers['x-forwarded-for'] || req.ip;
console.log('[!] UserIP => ', userIp.red.bold);
http.get(`http://ip-api.com/json/${userIp}`, (resp) => {
let data = '';

resp.on('data', (chunk) => {
data += chunk;
});
resp.on('end', () => {
const parsedData = JSON.parse(data);
const formattedData = JSON.stringify(parsedData, null, 2);
console.log(formattedData);
})
})

res.sendFile(__dirname + '/server/index.html');
});


qrcode.generate(host, {small: true}, function (qrcode){
console.log(qrcode);
})

spooky.listen(port, () =>{
console.log(`server running in = > http://localhost:${port}`.white.bold);
})
