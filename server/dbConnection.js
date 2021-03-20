var mysql = require('mysql');
var PASSWORD = require('../config.js');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'staging'
})

module.exports = con;