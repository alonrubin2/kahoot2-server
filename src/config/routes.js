const express = require('express'); 
const routes = express.Router();
const AnswersController = require('../controllers/answers.controller');

routes.put('/right-answer', AnswersController.createRightAnswer);
routes.put('/wrong-answer', AnswersController.createWrongAnswer);
