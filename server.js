

var express = require('express');
var session = require('express-session');
var http = require('http')
var fs=require('fs');
var app = express();
var path = require("path");


var router = require(__dirname +'/js/server/router')
//set up the db connecton

// app.set('views', path.join(__dirname, 'htmls'));  
// app.set('view engine', 'jade');
//set the view engine as handlebar
var handlebars=require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


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

    res.render('home');
     
});

// dynamically include routes (Controller)
// fs.readdirSync('./controllers').forEach(function (file) {
//   if(file.substr(-3) == '.js') {
//       route = require('./controllers/' + file);
//       route.controller(app);
//   }
// });


// 404 catch-all handler (middleware)
app.use(function(req, res, next){
res.status(404);
res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('500');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});










