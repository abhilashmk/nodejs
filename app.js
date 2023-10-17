var express = require('express');
var app = express();
const winston = require('winston');
var sleep = require('sleep');
const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};

const { monitorEventLoopDelay } = require('perf_hooks');
const h = monitorEventLoopDelay({ resolution: 10 });

h.enable();

const logger = winston.createLogger(logConfiguration);
app.get('/', function (req, res) {
    const start = Date.now();
    while (Date.now() - start < 4000) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 4000);
    }
    res.send('Hello World!');
});

port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});
setInterval(() => {
    console.log(`The mean event loop delay over the last 5 seconds was ${h.mean}ms`);
    h.reset();
}, 5000);
