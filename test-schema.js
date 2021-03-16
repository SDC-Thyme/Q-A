
const testQA = new Schema ({
{
  product_id: "11001",
  "results": [
      {
          "question_id": Number,
          "question_body": String,
          "question_date": Date,
          "asker_name": String,
          "question_helpfulness": Number,
          "reported": Boolean,
          "answers": {
            // whatever the answer id is
            "{answer_id}": {
            "id": Number,
            "body": String,
            "date": Date,
            "answerer_name": String,
            "helpfulness": Number,
            "photos": [String]
        }}
      }
  ]
}


})