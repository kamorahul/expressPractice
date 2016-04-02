var express = require('express');
var app = express();

app.get("/rahul",function(req,res){
  res.end("reached to rahul")
})

app.get("/dipak",function(req,res){
  res.end("hello dipak")
})
app.listen(3000)
