var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'localhost',
  user: 'sdc_user',
  password: 'sdcmysql',
  database: 'staging',
  port: 3306
})

module.exports = con;