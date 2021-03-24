const con = require('../dbConnection.js')



var getAnswers = ({question_id, count = 5, page = 1}, res) => {
  console.log({question_id, count,page})
  con.query(`SELECT answers.id, answers.body, answers.date_written, answers.answerer_name, answers.helpfulness FROM answers WHERE answers.question_id = ${question_id} AND answers.reported = 0 LIMIT ${count * (page - 1)}, ${count};`, function(err, data) {
    if (err) {
      res.status(400).send(err);
    }

    var ansData = data;
    for (var i = 0; i < ansData.length; i++) {
      ansData[i].answer_id = ansData[i].id;
      delete ansData[i].id
    }
    //if you really want to change id to answer_id
    var ansIdString = '('
    for(var i = 0; i < data.length; i++) {
      ansIdString += `${data[i].answer_id}`;
      if (i != data.length - 1){
        ansIdString  += ', ';
      }
    }
    ansIdString += ')';

    if (ansIdString !== '()') {

      con.query(`SELECT answer_photos.answer_id, answer_photos.id, answer_photos.url FROM answer_photos WHERE answer_photos.answer_id IN ${ansIdString};`, function(err, data) {
        if (err) {
          res.status(400).send(err);
        }


        for (var i = 0; i < ansData.length; i++) {
          var photoArr = data;
          photoArr = photoArr.filter(element => element.answer_id === ansData[i].answer_id);
          var photoLinks = photoArr.map(element => {return {id: element.id, url: element.url}});

          ansData[i].photos = photoLinks;
        }
        res.send({question: question_id,page: page, count: count, results: ansData});

      })
    } else {
      res.send({question: question_id,page: page, count: count, results: []});
    }



    console.log(ansIdString);

  })


}


module.exports = getAnswers;