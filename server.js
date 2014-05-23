'use strict';

var express = require ('express');

var app = express();
var httpport = process.env.port || 1234;

var server = app.listen(httpport, function() {
  console.log('Listening on port ', server.address().port);
});

// Serve up main index.html from app
app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/styles', express.static(__dirname + '/app/styles'));
app.use('/views', express.static(__dirname + '/app/views'));
app.use('/fonts', express.static(__dirname + '/app/fonts'));
app.use('/images', express.static(__dirname + '/app/images'));

// Get request handling

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});