var getRouter = require('express').Router();
var getQuestions = require('./getControllers/getQuestions.js');
var getAnswers = require('./getControllers/getAnswers.js');


getRouter.route('/qa/questions')
.get( (req,res) => {

  var qParams = req.query;

  if (qParams.product_id === undefined) {
    return res.status(400).send('Product Id Undefined');
  } else {
      getQuestions(qParams, res);
  }

})

getRouter.route('/qa/questions/:question_id/answers')
.get( (req,res) => {

  var aParams = {...req.params, ...req.query}
  getAnswers(aParams, res)


})

getRouter.route('/')
.get( (req,res) => {
 res.send('hi');

})

getRouter.route('/loaderio-852382a9231ea08621370785f45f495c')
.get( (req,res) => {
 res.sendFile('/loaderToken/loaderio-852382a9231ea08621370785f45f495c.txt');

})


// con.query('SELECT questions.id, questions.body, questions.asker_name, questions.helpful FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;', function(err, data) {
//   if (err) throw err;
//   res.send(data);
// })

module.exports = getRouter;