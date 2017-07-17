
var http = require('http');
var server = http.createServer();
var models= require("./src/models/time");
var Time = models.Time;
var Promise = require('bluebird');

var bodyParser = require('body-parser');

var timeApi = require("./src/api/timestamp");
var models= require("./src/models/time");
var Time = models.Time;

server.on('request', require('./app'));

Promise.all([
        Time.sync({})
    ])
    .then(function () {
        server.listen(3001, function () {
            console.log('Server is listening on port 3001!');
        });
    })
    .catch(console.error);
