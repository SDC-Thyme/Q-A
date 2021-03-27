# Team Thyme Questions and Answers API Documentation

The goal of this project was to deploy a working backend system with both server and database for a legacy product landing page's Q&A section. Because the data in this section only had "one to many" relationships (i.e. one product to many questions, one question to many answers,) MySQL was chosen as the database to best fit the needs of the project.

The data itself came in three large csv files (questions, answers, and answer_photos), each containing millions of records. Luckily, the format of the initial data was such that it could be directly verified and loaded into the database. MySQL's native and custom table constraints were use to check the validity of the data as it was being loaded into the database.

Docker was later implemented for easier deployment to AWS.

### Technologies Used


> Back-End

- Node.js
- Express
- MySQL
- Docker

> Stress Testing
- Loader.io

 Request Type | Endpoint                          | Returns
  ------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------
  GET          | /qa/questions                    | Returns an object with questions for a particular product along with answers/photos associated with the question. "product_id" is a mandatory query parameter, "page" and "count" are optional query paramters that default to 1 and 5 respectively.
   GET          | /qa/questions/:questionId/answers           | Returns object with answers and photos related a question. Accepts "page" and "count" as optional query paramters that default to 1 and 5 respectively.
   POST         | /qa/questions                   | Posts a question for a specfic product. Requires a "product_id" query paramter to specify which product the question is in regards to. The request body is accepted as JSON data.
   POST         | /qa/questions/:questionId/answers     | Posts an answer and up to 5 photos for a question. The request body is accepted as JSON data.
    PUT          | /qa/questions/:question_id/helpful | Increments the "helpful" statistic associated with a question.
    PUT | /qa/questions/:question_id/report | Toggles a question as being "reported".
    PUT | /qa/answers/:answer_id/helpful | Increments the "helpful" statistic associated with an answer.
    PUT | /qa/answers/:answer_id/report | Toggles an answer as being "reported".