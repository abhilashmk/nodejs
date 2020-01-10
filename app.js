var express = require('express');
var port = 0;
var app = express();
app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 
 

res.send("Hello world Linux Abhilash");



 
});

port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
