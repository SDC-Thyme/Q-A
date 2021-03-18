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
  var sql = `CREATE TABLE questions (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, product_id INT(9) NOT NULL ${intNullConstraint('product_id')}, body VARCHAR(1000) NOT NULL, date_written DATE NOT NULL CONSTRAINT qst_date_ck CHECK (date_written != 0000-00-00), asker_name VARCHAR(60) NOT NULL, asker_email VARCHAR(60) NOT NULL constraint qst_chk_email check (asker_email like '%_@__%.__%'), reported INT NOT NULL CONSTRAINT qst_rep_ck CHECK (reported in (0, 1)) , helpful INT(7) NOT NULL)`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Questions created");
  });
})