const Answer = require('../models/Answer');
const Question = require('../models/question');
const AnswerController = require('../controllers/answers.controller');

class QuestionController {

    static async createQuestion(req, res) {
        try {
            const recievedQuestion = req.body
            const answers = recievedQuestion.answers;
            console.log(recievedQuestion, answers, 'line 11')
            let questionToSave = new Question({
                question: recievedQuestion.question,
                answers: recievedQuestion.answers.map((answer, index) => {
                    return answer[index + 1] = {
                        body: answer.body,
                        isCorrect: answer.isCorrect,
                        id: answer.id
                    }
                })
            })
            const newQuestion = await questionToSave.save();
            console.log(newQuestion, 'line 22')
            res.send(newQuestion)
        }
        catch (err) {
            console.log(err);
            // res.sendStatus(500);
        }
    }


}


module.exports = QuestionController;