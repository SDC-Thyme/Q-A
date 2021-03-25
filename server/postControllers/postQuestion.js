const con = require('../dbConnection.js');


var postQuestion = ({product_id, body, name, email}, res) => {

  var date = new Date();
  var dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  con.query(`INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness) VALUES (${product_id}, ${JSON.stringify(body)}, ${JSON.stringify(dateString)}, ${JSON.stringify(name)}, ${JSON.stringify(email)}, 0, 0);`, (err, data) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.send(data);
  })
}


module.exports = postQuestion;