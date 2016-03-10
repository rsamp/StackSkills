var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.render('index.ejs', {title: "Hello world"});
});

app.get('/about', function(req, res){
  res.render('layout.ejs', {title: "About us", body: '<h1>About</h1>'});
});

app.get('/*', function(req, res){
  res.status(404).render('error.ejs', {title: "404 error"});
});

console.log("server started");
app.listen(3000);
