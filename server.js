

var express = require('express');
var fs=require('fs');
var app = express();
var path = require("path");

app.use(express.static(__dirname));


app.get('/', function (req, res) {
    res.set('content-type','text/html');
 	res.send(fs.readFileSync(__dirname+'/index.html','utf8'));
    res.end();
     
});

app.listen(3000);
console.log("app starts.");











