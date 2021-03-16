var mysql = require('mysql');
var PASSWORD = require('../config.js');


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'staging'
})


con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
  var sql = "CREATE TABLE questions (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, product_id INT(9) NOT NULL, body VARCHAR(1000) NOT NULL, date_written VARCHAR(10) NOT NULL, asker_name VARCHAR(60) NOT NULL, asker_email VARCHAR(60) NOT NULL, reported BIT NOT NULL, helpful INT(7) NOT NULL)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})