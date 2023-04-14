CREATE TABLE Users
(
	user_id int PRIMARY KEY SERIAL NOT NULL,
	user_email char(50) NOT NULL,
	user_login char(50) NOT NULL,
	user_password char(50) NOT NULL,
	user_roles_array char(50)[] NOT NULL,
	user_tests_by_invite_array int[] NOT NULL
)

CREATE TABLE Tests
(
	test_id int PRIMARY KEY NOT NULL,
	test_creator_id int REFERENCES Users(user_id) ALLOW NULL,
	test_title char(50) ALLOW NULL,
	test_description text ALLOW NULL,
	test_type_id int REFERENCES TestTypes(type_id) ALLOW NULL,
	test_by_invitation bool ALLOW NULL,
	test_invitation_key char(50) ALLOW NULL,
	test_date_of_creation char(50) ALLOW NULL
)

CREATE TABLE Results
(
	result_id int PRIMARY KEY SERIAL ALLOW NULL,
	user_id int REFERENCES Users(user_id) ALLOW NULL,
	test_id int REFERENCES Tests(test_id) ALLOW NULL,
	test_creator_id int REFERENCES Users(user_id) ALLOW NULL,
	result_by_invitation bool ALLOW NULL,
	date_of_passage char(50) ALLOW NULL,
	result_comment char(50) ALLOW NULL
)

CREATE TABLE TestTypes
(
	type_id int PRIMARY KEY SERIAL ALLOW NULL,
	type_name char(50) ALLOW NULL
)


CREATE TABLE Questions
(
	question_id int PRIMARY KEY ALLOW NULL,
	question_number int ALLOW NULL,
	question_text char(50) ALLOW NULL,
	question_right_answer_number int ALLOW NULL
)

CREATE TABLE Ballings
(
	balling_id int PRIMARY KEY SERIAL ALLOW NULL,
	test_id int REFERENCES Tests(test_id) ALLOW NULL,
	balling_number int ALLOW NULL,
	balling_min_value int ALLOW NULL,
	balling_max_value int ALLOW NULL,
	balling_auto_result char(50) ALLOW NULL
)

CREATE TABLE UserAnswers
(
	answer_id int PRIMARY KEY SERIAL ALLOW NULL,
	answer_number int ALLOW NULL,
	answer_text char(50) ALLOW NULL,
	answer_value text ALLOW NULL
)




CREATE TABLE ResultsTests
(
	result_id int REFERENCES Results(result_id) NOT NULL,
	test_id int REFERENCES Tests(test_id) NOT NULL
)

CREATE TABLE UsersTests
(
	user_id int REFERENCES Users(user_id) NOT NULL,
	test_id int REFERENCES Tests(test_id) NOT NULL
)

CREATE TABLE QuestionsTests
(
	test_id int REFERENCES Tests(test_id) NOT NULL,
	question_id int REFERENCES Questions(question_id) NOT NULL
)

CREATE TABLE AnswersQuestions
(
	question_id int REFERENCES Questions(question_id) NOT NULL,
	answer_id int REFERENCES Answers(answer_id) NOT NULL
)