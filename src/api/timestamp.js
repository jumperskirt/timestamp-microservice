var express = require("express");
var Time = require( '../models/time').Time;
var request = require("request");
var config = require("../../config.js");

var timeApi = express.Router(); //import the routes object

timeApi.get("/:date", function (req, res, next) {
  var date = req.params.date;
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

    return Time.create({
      natural: natural,
      unix: unix
    })
    .then(function(date) {
      unix =  date.unix;
      natural = date.natural;
      res.json({
        "unix": unix,
        "natural": natural
      });
    })
    .catch(next);
  });
// timeApi.get("/:date", function (request, response) {
//   var date = request.params.date;
//   var natural;
//   var unix;
//   if (!parseInt(date)) {
//       var checkIfValid = new Date(date);
//       if (isNaN(checkIfValid.getTime())) {
//         natural = null;
//       } else {
//         natural = date;
//       }
//       unix = Date.parse(date);
//     } else {
//       natural = new Date(parseInt(date)).toUTCString();
//       naturalArr = natural.split(" ");
//       natural = `${naturalArr[2]} ${naturalArr[1]}, ${naturalArr[3]}`
//       unix = parseInt(date);
//     }
//     response.json({
//       "unix": unix,
//       "natural": natural
//     });
//   });
module.exports = timeApi;
