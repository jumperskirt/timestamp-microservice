

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');
var timeApi = require("./src/api/timestamp");
var models= require("./src/models/time");
var Time = models.Time;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(express.static('views'));

app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', timeApi);
app.get("/", function (req, res) {
  res.render('index');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});


module.exports = app;
