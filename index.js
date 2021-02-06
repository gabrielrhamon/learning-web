const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const port = 3100


//static
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname+"public/css/"));
app.use('/js', express.static(__dirname+"public/js"));
app.use('/img', express.static(__dirname+"public/assets/img"));

//Views
app.use(express.static(__dirname + '/views'));
app.get("/", function(req, res){
  res.sendFile(__dirname +"/views/index.html");
});

app.get("/project", function(req, res){
  res.send("Sobre");
});


app.listen(port, function(){
    console.log("Servidor ON - http://localhost:3100/");
});
