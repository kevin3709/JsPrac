var express = require("express");

var app = express();

app.listen(3000, function(){
    console.log("listening on port 3000");
});

app.get("/", function(req, res){
    res.sendfile(__dirname + "/main.html");
});

app.get("/index", function(req, res){
    res.sendfile(__dirname + "/index.html");
});