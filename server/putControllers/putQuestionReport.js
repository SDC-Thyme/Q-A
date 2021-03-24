const con = require('../dbConnection.js');



var putQuestionReport = ({question_id}, res) => {

  con.query(`UPDATE questions SET reported = 1 WHERE question_id = ${question_id}`, (err,data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  })



}

module.exports = putQuestionReport