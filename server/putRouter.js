var putRouter = require('express').Router();
var putQuestionHelpful = require('./putControllers/putQuestionHelpful.js');
var putQuestionReport = require('./putControllers/putQuestionReport.js');
var putAnswerHelpful = require('./putControllers/putAnswerHelpful.js');
var putAnswerReport = require('./putControllers/putAnswerReport.js');


putRouter.route('/qa/questions/:question_id/helpful')
  .get((req, res) => {
    putQuestionHelpful(req.params, res);
  })

putRouter.route('/qa/questions/:question_id/report')
  .get((req, res) => {
    putQuestionReport(req.params, res);
  })

putRouter.route('/qa/answers/:answer_id/helpful')
  .get((req, res) => {
    putAnswerHelpful(req.params, res);
  })



putRouter.route('/qa/answers/:answer_id/report')
  .get((req, res) => {
    putAnswerReport(req.params, res);
  })





module.exports = putRouter;