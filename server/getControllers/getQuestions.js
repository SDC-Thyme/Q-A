const con = require('../dbConnection.js')



var getQuestions = ({product_id, count = 5, page = 1}, res) => {




  con.query(`SELECT questions.question_id, questions.question_body, questions.question_date, questions.asker_name, questions.question_helpfulness, questions.reported FROM questions WHERE questions.product_id = ${product_id} AND questions.reported = 0 LIMIT ${count * (page - 1)}, ${count};`, function(err, data) {
    if (err) {
      res.status(400).send(err);
    }
    var qstData = data;

    for (var i = 0; i < qstData.length; i++) {
      qstData[i].reported = Boolean(qstData[i].reported);
    }

    var qstIdString = '('
      for(var i = 0; i < data.length; i++) {

        qstIdString += `${data[i].question_id}`;
        if (i != data.length - 1){
          qstIdString  += ', ';
        }
      }
      qstIdString += ')';
    console.log(qstIdString );
      if (qstIdString !== '()') {
      con.query(`SELECT answers.id, answers.question_id, answers.body, answers.date_written, answers.answerer_name, answers.helpfulness FROM answers  WHERE answers.reported = 0 AND answers.question_id IN ${qstIdString};`, function(err, data) {
        if (err) {
          res.status(400).send(err);
        }

        var ansData = data;
        var ansIdString = '('
        for(var i = 0; i < data.length; i++) {
          ansIdString += `${data[i].id}`;
          if (i != data.length - 1){
            ansIdString  += ', ';
          }
        }
        ansIdString += ')';


        con.query(`SELECT answer_photos.answer_id, answer_photos.url FROM answer_photos WHERE answer_photos.answer_id IN ${ansIdString};`, function(err, data) {
          if (err) {
            res.status(400).send(err);
          }

          for (var i = 0; i < ansData.length; i++) {
            var photoArr = data;
            photoArr = photoArr.filter(element => element.answer_id === ansData[i].id);
            var photoLinks = photoArr.map(element => element.url);

            ansData[i].photos = photoLinks;
          }


          for (var j = 0; j < qstData.length; j++) {
            var answerObj = {};
            var filteredData = ansData.filter(element => element.question_id === qstData[j].question_id);
            for (var i = 0; i < filteredData.length; i++) {
              delete filteredData[i].question_id;
              answerObj[filteredData[i].id] = filteredData[i];
            }
            qstData[j].answers = answerObj;

          }

          res.send({product_id: product_id, results: qstData});

        })
      })
  } else {
    res.send({product_id: product_id, results: []})
  }







  })
}








module.exports = getQuestions;