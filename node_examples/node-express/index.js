const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3002;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Tyoe', 'text/html');
    res.end('<html><body><h1>This is Express</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})