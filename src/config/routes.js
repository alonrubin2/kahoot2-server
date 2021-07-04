const express = require('express'); 
const routes = express.Router();
const AnswersController = require('../controllers/answers.controller');
const UserController = require('../controllers/user.controller');


// create
routes.put('/right-answer', AnswersController.createRightAnswer);
routes.put('/wrong-answer', AnswersController.createWrongAnswer);
routes.put('/user', UserController.createUser)

// get
routes.get('/wrong-answer', AnswersController.getAllWrongAnswers);
routes.get('/user', UserController.findUserByName);

// edit

// delete



module.exports = routes;