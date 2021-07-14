const Answer = require('../models/Answer');
// const Answer = require('../models/Answer');


class AnswerController {

    static async createAnswer(req, res) {
        try {
            const answer = new Answer({
                answer: req.body.answer,
                isCorrect: req.body.isCorrect
            })
            const newAnswer = answer.save();
            res.status(201).send(newAnswer);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }

    // static async createAnswer(req, res) {
    //     try {
    //         const answer = new Answer({
    //             answer: req.body.answer
    //         })
    //         const newAnswer = answer.save();
    //         res.status(201).send(newAnswer);
    //     }
    //     catch(err) {
    //         console.log(err);
    //         res.sendStatus(400);
    //     }
    // }

    static async getAllAnswers(req, res) {
        console.log('starting to find')
        try {
            let answers = await Answer.find();
            if (answers) {
                console.log('we got answers')
                res.send(answers);
            }
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
    // later we will have a method of getting one specific 
    // wrong-answer via text search
    // need interface for that

}

module.exports = AnswerController;