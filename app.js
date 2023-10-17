var express = require('express');
var app = express();
const winston = require('winston');
var sleep = require('sleep');
const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};

/*
const { performance, PerformanceObserver, perf_hooks } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    const entry = items.getEntries()[0];
    logger.info(`Event Loop Delay: ${entry.duration}ms`);
});

obs.observe({ entryTypes: ['eventLoopDelay'], buffered: true });
*/

const { monitorEventLoopDelay } = require('perf_hooks');
const h = monitorEventLoopDelay({ resolution: 20 });

const logger = winston.createLogger(logConfiguration);
app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
h.enable();
sleep.sleep(5)
logger.info('Hello, Winston!');
res.send("Hello world Linux Abhilash feature test");
h.disable();
logger.info(h.max);
});

port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});
console.log("Server running at http://localhost:%d", port);
