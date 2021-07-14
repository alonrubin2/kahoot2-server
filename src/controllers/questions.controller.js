const Answer = require('../models/Answer');
const Question = require('../models/question');

class QuestionController {

    static async createQuestion(req, res) {
        try {
            const answers = req.body.answers;
            let answersArr = [];
            for (answer in answers) {
                answer = new Answer({
                    answer: req.body.answer,
                    isCorrect: req.body.isCorrect
                })
                answersArr.push(answer._id);
            }
            const question = new Question({
                question: req.body.question,
                answers: answersArr
            })
            const newquestion = question.save();
            res.status(201).send(newquestion);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }


}


module.exports = QuestionController;