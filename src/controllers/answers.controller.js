const RightAnswer = require('../models/rightAnswer');
const WrongAnswer = require('../models/wrongAnswer');


class AnswerController {

    static async createRightAnswer(req, res) {
        try {
            const answer = new RightAnswer({
                answer: req.body.answer
            })
            const newAnswer = answer.save();
            res.status(201).send(newAnswer);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    }

    static async createWrongAnswer(req, res) {
        try {
            const answer = new WrongAnswer({
                answer: req.body.answer
            })
            const newAnswer = answer.save();
            res.status(201).send(newAnswer);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    }

    static async getAllWrongAnswers(req, res) {
        console.log('starting to find')
        try {
            let answers = await WrongAnswer.find();
            if (answers) {
                console.log('we got answers')
                res.send(answers);
            }
        }
        catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
    // later we will have a method of getting one specific wrong-answer via text search.
    // need interface for that

}

module.exports = AnswerController;