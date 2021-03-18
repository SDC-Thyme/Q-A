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

  var sql = `CREATE TABLE answer_photos (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, answer_id INT(9) NOT NULL ${intNullConstraint('answer_id')}, url VARCHAR(300) NOT NULL CONSTRAINT url_ck CHECK (url LIKE 'https://%.%'))`;

var fKeySql = 'ALTER TABLE answer_photos ADD FOREIGN KEY (answer_id) REFERENCES answers (id);'

  con.query(sql, function (err, result) {
    if (err) throw err;
    con.query(fKeySql, function (err, result) {
      if (err) throw err;
      console.log("Answer Photos created");
    });
  });
})


//remember to add the foreign key constraint after since it doesn't work here