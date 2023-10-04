var express = require('express');
var app = express();
const winston = require('winston');
//var sleep = require('sleep');
const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const logger = winston.createLogger(logConfiguration);
app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
//sleep.sleep(5)
res.send("Hello world Linux Abhilash feature test");

 
});

port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});
logger.info('Hello, Winston!');
console.log("Server running at http://localhost:%d", port);
