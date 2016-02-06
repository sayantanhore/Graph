(function(){
    "use strict";
	var clear = require('clear');
	clear();
	
	var express = require('express');
	var app = express();
	var path = require('path');
    
    app.use('/static', express.static(__dirname + '/static'));
	app.use('/templates', express.static(__dirname + '/templates'));
    app.use('/vendor', express.static(__dirname + '/bower_components'));
    
    app.get('/', function(req, res){
		res.sendFile(__dirname + '/templates/index.html');
	});
    
    var server = app.listen('3200', function(){
		console.log("Listening @ " + 3200)
	});
})();