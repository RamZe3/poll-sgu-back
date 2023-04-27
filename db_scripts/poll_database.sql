CREATE TABLE TestTypes
(
	type_id SERIAL PRIMARY KEY,
	type_name char(50) 
);

CREATE TABLE Users
(
	user_id SERIAL PRIMARY KEY NOT NULL,
	user_email char(50) NOT NULL,
	user_login char(50) NOT NULL,
	user_password char(50) NOT NULL,
	user_roles_array char(50)[] NOT NULL,
	user_tests_by_invite_array int[] NOT NULL
);

CREATE TABLE Tests
(
	test_id int PRIMARY KEY NOT NULL,
	test_creator_id int REFERENCES Users(user_id),
	test_title char(50),
	test_description text,
	test_type_id int REFERENCES TestTypes(type_id),
	test_by_invitation bool,
	test_invitation_key char(50),
	test_date_of_creation char(50) 
);

CREATE TABLE Results
(
	result_id SERIAL PRIMARY KEY,
	user_id int REFERENCES Users(user_id),
	test_id int REFERENCES Tests(test_id),
	test_creator_id int REFERENCES Users(user_id),
	result_by_invitation bool,
	date_of_passage char(50),
	result_comment char(50) 
);

CREATE TABLE Questions
(
	question_id SERIAL PRIMARY KEY,
	question_number int,
	question_text char(50),
	question_right_answer_number int 
);

CREATE TABLE Ballings
(
	balling_id SERIAL PRIMARY KEY,
	test_id int REFERENCES Tests(test_id),
	balling_number int,
	balling_min_value int,
	balling_max_value int,
	balling_auto_result char(50) 
);

CREATE TABLE UserAnswers
(
	answer_id SERIAL PRIMARY KEY,
	answer_number int,
	answer_text char(50),
	answer_value text 
);




CREATE TABLE ResultsTests
(
	result_id int REFERENCES Results(result_id) NOT NULL,
	test_id int REFERENCES Tests(test_id) NOT NULL
);

CREATE TABLE UsersTests
(
	user_id int REFERENCES Users(user_id) NOT NULL,
	test_id int REFERENCES Tests(test_id) NOT NULL
);

CREATE TABLE QuestionsTests
(
	test_id int REFERENCES Tests(test_id) NOT NULL,
	question_id int REFERENCES Questions(question_id) NOT NULL
);

CREATE TABLE AnswersQuestions
(
	question_id int REFERENCES Questions(question_id) NOT NULL,
	answer_id int REFERENCES UserAnswers(answer_id) NOT NULL
)

