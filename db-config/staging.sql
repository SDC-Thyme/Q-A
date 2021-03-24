CREATE TABLE questions (question_id INT(9) PRIMARY KEY AUTO_INCREMENT, product_id INT(9) NOT NULL CONSTRAINT product_id_nonull_ck CHECK (product_id != 0), question_body VARCHAR(1000) NOT NULL, question_date DATE NOT NULL CONSTRAINT qst_date_ck CHECK (question_date != 0000-00-00), asker_name VARCHAR(60) NOT NULL, asker_email VARCHAR(60) NOT NULL constraint qst_chk_email check (asker_email like '%_@__%.__%'), reported INT NOT NULL CONSTRAINT qst_rep_ck CHECK (reported in (0, 1)) , question_helpfulness INT(7) NOT NULL);


CREATE TABLE answers (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, question_id INT(9) NOT NULL CONSTRAINT question_id_nonull_ck CHECK (question_id != 0),  body VARCHAR(1000) NOT NULL, date_written DATE NOT NULL CONSTRAINT ans_date_ck CHECK (date_written != 0000-00-00), answerer_name VARCHAR(60) NOT NULL, answerer_email VARCHAR(60) NOT NULL constraint ans_chk_email check (answerer_email like '%_@__%.__%' or answerer_email like '%seller%'), reported INT NOT NULL CONSTRAINT ans_rep_ck CHECK (reported in (0, 1)) , helpfulness INT(7) NOT NULL);

ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (question_id);

CREATE TABLE answer_photos (id INT(9) UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, answer_id INT(9) NOT NULL CONSTRAINT answer_id_nonull_ck CHECK (answer_id != 0), url VARCHAR(300) NOT NULL CONSTRAINT url_ck CHECK (url LIKE 'https://%.%'));

ALTER TABLE answer_photos ADD FOREIGN KEY (answer_id) REFERENCES answers (id);

CREATE USER 'root'@'%' IDENTIFIED BY 'sdcmysql';