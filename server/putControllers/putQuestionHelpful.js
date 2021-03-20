const con = require('../dbConnection.js');

var putQuestionHelpful = ({question_id}, res) => {
  con.query(`UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE question_id = ${question_id}`, (err,data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  })

}

module.exports = putQuestionHelpful;