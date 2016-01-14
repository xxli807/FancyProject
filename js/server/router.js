


//use for api and html 
var express = require('express');
var fs=require('fs');
module.exports = function(){
 	'use strict';

 	//use for api
	var blgRouter = express.Router();
	blgRouter.get('/blog', function (req, res) {		 
 		 
    	res.send(fs.readFileSync(__dirname+'../../../htmls/TechBlog.html','utf8'));
	})


	blgRouter.post('/blog/add', function (req, res) {
  		;
	})

	blgRouter.post('/blog/update', function (req, res) {
  		;
	})


	//use for html,template
	var r2 = express.Router();
		r2.get('/', function (req, res, next) {
  		next();
	})

	return [blgRouter,r2];

	//app.use('/', [r1, r2]);

}();





 


























