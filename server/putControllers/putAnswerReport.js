const con = require('../dbConnection.js');

var putAnswerReport = ({answer_id}, res) => {
  con.query(`UPDATE answers SET reported = 1 WHERE id = ${answer_id};`, (err, data) => {
    if (err) {
      return res.send(err);
    }
    res.send(data);
  })
}


module.exports = putAnswerReport;