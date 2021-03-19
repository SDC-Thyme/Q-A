var getRouter = require('express').Router();
var getController = require('./getController.js')

getRouter.route('/qa/questions')
.get( (req,res) => {
  console.log(req.query)
  var qParams = req.query;

  if (qParams.product_id === undefined) {
    res.status(400).send('Product Id Undefined');
  } else {
      getController.getQuestions(qParams, res);
  }

})

getRouter.route('/')
.get( (req,res) => {
 res.send('hi');

})


// con.query('SELECT questions.id, questions.body, questions.asker_name, questions.helpful FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;', function(err, data) {
//   if (err) throw err;
//   res.send(data);
// })

module.exports = getRouter;