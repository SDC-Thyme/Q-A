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
  var sql = `CREATE TABLE answers (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, question_id INT(9) NOT NULL ${intNullConstraint('question_id')},  body VARCHAR(1000) NOT NULL, date_written DATE NOT NULL CONSTRAINT ans_date_ck CHECK (date_written != 0000-00-00), answerer_name VARCHAR(60) NOT NULL, answerer_email VARCHAR(60) NOT NULL constraint ans_chk_email check (answerer_email like '%_@__%.__%' or answerer_email like '%seller%'), reported INT NOT NULL CONSTRAINT ans_rep_ck CHECK (reported in (0, 1)) , helpfulness INT(7) NOT NULL)`;

const fKeySql = 'ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (question_id);'

  con.query(sql, function (err, result) {
    if (err) throw err;
    con.query(fKeySql, function (err, result) {
      if (err) throw err;
      console.log("Answers created");
    });
  });
})


//remember to add index for the quesiton_id;