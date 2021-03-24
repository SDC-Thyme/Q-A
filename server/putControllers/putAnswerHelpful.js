const con = require('../dbConnection.js');

var putAnswerHelpful = ({answer_id}, res) => {
  con.query(`UPDATE answers SET helpfulness = helpfulness + 1 WHERE id = ${answer_id};`, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  })
}

module.exports = putAnswerHelpful;