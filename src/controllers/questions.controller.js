const Answer = require('../models/Answer');
const Question = require('../models/question');
const AnswerController = require('../controllers/answers.controller');

class QuestionController {

    static async createQuestion(req, res) {
        try {
            const answers = req.body.answers;
            console.log(req.body, 'these are the answers line 10');
            let answersArr = [];
            answers.forEach((answer) => {
                answer = new Answer({
                    answer: answer.body,
                    isCorrect: answer.isCorrect
                })
                console.log(answer, 'this is the answer line 17')
                newAnswer = await AnswerController.createAnswer(answer)
                answersArr.push(newAnswer._id);
            })


            const question = new Question({
                question: req.body.question,
                answers: answersArr
            })
            console.log(question, 'this is the question line 24')
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