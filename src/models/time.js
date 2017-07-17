'use strict';

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/timestamp');

var Time = db.define('time', {
  unix: {
    type: Sequelize.STRING,
  },
  natural: {
      type: Sequelize.STRING,
  }
});

module.exports = {
  Time
}
