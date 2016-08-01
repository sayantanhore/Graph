(function(){
  "use strict";
	var clear = require('clear');
	clear();

	var express = require('express');
	var app = express();
	var path = require('path');

  //app.use('/static', express.static(__dirname + '/static'));
	app.use('/templates', express.static(__dirname + '/src/templates'));
  app.use('/vendor', express.static(__dirname + '/bower_components'));
  app.use('/scripts', express.static(__dirname + '/src/scripts'));

  app.get('/', function(req, res){
		res.sendFile(__dirname + '/src/templates/index.html');
	});

  var server = app.listen(process.env.PORT || 3200, function(){
      console.log("Listening @ " + (process.env.PORT || 3200));
  });
})();