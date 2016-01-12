


//use for api and html 
var express = require('express');

module.exports = function(){
 	'use strict';

 	//use for api
	var r1 = express.Router();
	r1.get('/blog', function (req, res, next) {
  		next();
	})

	r1.post('/blog/add', function (req, res) {
  		;
	})

	r1.post('/blog/update', function (req, res) {
  		;
	}))


	//use for html,template
	var r2 = express.Router();
		r2.get('/', function (req, res, next) {
  		next();
	})

	return [r1,r2];

	//app.use('/', [r1, r2]);

}();





 


























