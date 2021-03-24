const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const getRouter = require('./getRouter.js');
const postRouter = require('./postRouter.js');
const putRouter = require('./putRouter.js');
var mysql = require('mysql');

const con = require('./dbConnection.js');



con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
}
)

app.use(bodyParser.json());
app.use(getRouter);
app.use(postRouter);
app.use(putRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = con

//SELECT questions.id, questions.body, questions.asker_name, questions.helpful FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;

// SELECT TOP questions FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;