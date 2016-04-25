


//use for api and html 
var express = require('express');
var fs=require('fs');
module.exports = function(){
 	'use strict';

 	//use for api
	var blgRouter = express.Router();
	blgRouter.get('/blog', function (req, res) {		 
 		 
    	res.send(fs.readFileSync(__dirname+'../../../views/TechBlog.html','utf8'));
	})

	blgRouter.get('/blog/view/:type', function (req, res) {
  		
  		//check if the type
  		var type = req.params.type;
  		console.log("type: " +type);
  		if(type.toLowerCase() == "csharp"){
			res.send(fs.readFileSync(__dirname+'../../../views/BlogView.html','utf8'));
  		}
		
		if(type.toLowerCase() == "java"){

  		}

  		if(type.toLowerCase() == "javascript"){

  		}

  		if(type.toLowerCase() == "css"){

  		}

  		if(type.toLowerCase() == "html"){

  		}

  		if(type.toLowerCase() == "automation"){

  		}
  		 
  		if(type.toLowerCase() == "tools"){

  		}

	})

	blgRouter.post('/blog/add', function (req, res) {
  		
  		//connect to mongo
  		var mongoClient =require('mongodb').MongoClient;
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





 


























