// Create web server

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/comments', function(req, res) {
    console.log("GET From Server");
    var comments = [];
    var file = fs.readFileSync('comments.txt', 'utf8');
    file = file.split("\n");
    for (var i = 0; i < file.length; i++) {
        comments.push(JSON.parse(file[i]));
    }
    res.send(comments);
});