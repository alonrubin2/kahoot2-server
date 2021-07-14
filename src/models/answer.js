const mongoose = require('mongoose');


const Answer = mongoose.model('Answer', {
    answer: {
        type: String
    },
    isCorrect: {
        type: Boolean,
        default: false
    }

})

module.exports = Answer;