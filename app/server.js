// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



app.get("/:date", function (request, response) {
  var date = request.params.date;
  var natural;
  var unix;
  if (!parseInt(date)) {
      var checkIfValid = new Date(date);
      if (isNaN(checkIfValid.getTime())) {
        natural = null;
      } else {
        natural = date;
      } 
      unix = Date.parse(date);
    } else {
      natural = new Date(parseInt(date)).toUTCString();
      naturalArr = natural.split(" ");
      natural = `${naturalArr[2]} ${naturalArr[1]}, ${naturalArr[3]}`
      unix = parseInt(date);
    }
  
  response.json({
    "unix": unix,
    "natural": natural
  });
});

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
