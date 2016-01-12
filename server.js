

var express = require('express');
var session = require('express-session');
var http = require('http')
var fs=require('fs');
var app = express();
var path = require("path");


var router = require(__dirname +'/js/server/router')
//set up the db connecton


//envionment setting
app.set('port', process.env.PORT || 3000);
app.use(session({
  genid: function(req) {
    return "GUID" // use UUIDs for session IDs
  },
  secret: 'TravelSessionKey',
  saveUninitialized: true,
  resave: false,
  cookie:{}
}))
  
app.use(router);
app.use(express.static(__dirname));


app.get('/', function (req, res) {

	var urlPath= req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    res.set('content-type','text/html');
 	res.send(fs.readFileSync(__dirname+'/index.html','utf8'));
    res.end();
     
});

// dynamically include routes (Controller)
// fs.readdirSync('./controllers').forEach(function (file) {
//   if(file.substr(-3) == '.js') {
//       route = require('./controllers/' + file);
//       route.controller(app);
//   }
// });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});










