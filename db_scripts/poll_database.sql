CREATE TABLE TestTypes
(
	type_id SERIAL PRIMARY KEY,
	type_name varchar(50) 
);

CREATE TABLE Users
(
	user_id SERIAL PRIMARY KEY NOT NULL,
	user_email varchar(50) NOT NULL,
	user_login varchar(50) NOT NULL,
	user_password varchar(50) NOT NULL,
	user_roles_array varchar(50)[],
	user_tests_by_invite_array int[]
);

CREATE TABLE Tests
(
	test_id SERIAL PRIMARY KEY NOT NULL,
	test_creator_id int REFERENCES Users(user_id),
	test_title varchar(50),
	test_description text,
	test_type_id int REFERENCES TestTypes(type_id),
	test_by_invitation bool,
	test_invitation_key varchar(50),
	test_date_of_creation varchar(50)
);

CREATE TABLE Results
(
	result_id SERIAL PRIMARY KEY,
	user_id int REFERENCES Users(user_id),
	test_id int REFERENCES Tests(test_id),
	test_creator_id int REFERENCES Users(user_id),
	result_by_invitation bool,
	date_of_passage varchar(50),
	result_comment varchar(50) 
);

CREATE TABLE Questions
(
	question_id SERIAL PRIMARY KEY,
	question_number int,
	question_text varchar(50),
	question_right_answer_number int,
	test_id int REFERENCES Tests(test_id) -- ДОБАВЛЕНО
);

CREATE TABLE Ballings
(
	balling_id SERIAL PRIMARY KEY,
	test_id int REFERENCES Tests(test_id),
	balling_number int,
	balling_min_value int,
	balling_max_value int,
	balling_auto_result varchar(50) 
);

CREATE TABLE UserAnswers
(
	answer_id SERIAL PRIMARY KEY,
	question_id int,
	result_id int,
	test_id int, -- ?
	answer_number int,
	answer_text varchar(50),
	answer_value text
);



-- удалено ResultsTests

-- удалено UsersTests

-- удалено AnswersQuestions