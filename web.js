#!/usr/bin/env node

var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {


var buffer = new Buffer(100);
buffer = fs.readFileSync('index.html','utf8');
console.log (buffer.toString("utf-8", 0, 12));


  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
