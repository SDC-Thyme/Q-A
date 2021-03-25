const con = require('../dbConnection.js');


var postAnswer = ({question_id, body, name, email, photos}, res) => {

  var date = new Date();
  var dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  con.query(`INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email, reported, helpfulness) VALUES (${question_id}, ${JSON.stringify(body)}, ${JSON.stringify(dateString)}, ${JSON.stringify(name)}, ${JSON.stringify(email)}, 0, 0);`, (err, data) => {

    if (err) {
     return res.status(400).send(err);
    }

    var photoString = '';

    for (var i = 0; i < photos.length; i++) {
      photoString += `(${data.insertId}, ${JSON.stringify(photos[i])})`;
      if (i !== photos.length - 1) {
        photoString+= ', ';
      }
    }
    console.log(photoString);

    con.query(`INSERT INTO answer_photos (answer_id, url) VALUES ${photoString}`, (err, data) => {
      if (err) {
      return  res.status(400).send(err);
      }
      res.send(data);
    })


  })

}


module.exports = postAnswer;
