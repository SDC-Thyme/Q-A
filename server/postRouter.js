var postRouter = require('express').Router();
var postQuestion = require('./postControllers/postQuestion.js');
var postAnswer = require('./postControllers/postAnswer.js');


postRouter.route('/qa/questions')
  .post((req, res) => {
    postQuestion(req.body, res);
  })

postRouter.route('/qa/questions/:question_id/answers')
  .post((req, res) => {
    var aParams = {...req.params, ...req.body};

    postAnswer(aParams, res);

  })

module.exports = postRouter;