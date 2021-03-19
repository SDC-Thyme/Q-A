const express = require('express');
const app = express();
const port = 3000;
const con = require('../database');
const bodyParser = require('body-parser');


app.use(bodyParser.json())

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!')
}
)

app.get('/', (req, res) => {
  console.log(req.query)
  con.query('SELECT questions.id, questions.body, questions.asker_name, questions.helpful FROM questions WHERE questions.product_id = 11100 AND questions.reported = 0;', function(err, data) {
    if (err) throw err;
    res.send(data);
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})