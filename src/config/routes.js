const express = require('express');
const routes = express.Router();
const AnswersController = require('../controllers/answers.controller');
const QuestionController = require('../controllers/questions.controller');
const UserController = require('../controllers/user.controller');


// create
routes.put('/answer', AnswersController.createAnswer);
routes.put('/user', UserController.createUser)
routes.put('/question', QuestionController.createQuestion)

// get
routes.get('/answer', AnswersController.getAllAnswers);
routes.get('/user', UserController.findUserByName);

// edit

// delete



module.exports = routes;