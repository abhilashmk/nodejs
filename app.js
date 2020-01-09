var express = require('express');

var app = express();
var somethin = require('notavailable');
app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 
 

res.send("Hello world Linux Abhilash");



 
});

var port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
