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
  var intNullConstraint = (input) => {return `CONSTRAINT ${input}_nonull_ck CHECK (${input} != 0)`}
  var sql = `DECLARE CONTINUE HANDLER FOR 1051 BEGIN `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("handler created");
  });