const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const getRouter = require('./getRouter.js');
const con = require('../database');


app.use(bodyParser.json());
app.use(getRouter);

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
}
)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//SELECT questions.id, questions.body, questions.asker_name, questions.helpful FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;

// SELECT TOP questions FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;