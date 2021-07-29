const mongoose = require('mongoose');


const Question = mongoose.model('Question', {
    question: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true
    }
})

module.exports = Question;
