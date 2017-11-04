var http = require('http');
//Now your application has access to the HTTP module, and is able to create a server:

http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});//aaa
        res.end('Hello New NodeJs!');
    }).listen(8080);

// var express = require('express')
// var app = express()
//
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
//
// app.listen(3000)
