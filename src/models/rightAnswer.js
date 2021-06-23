const mongoose = require('mongoose');


const RightAnswer = mongoose.model('RightAnswer', {
    answer: {
        type: String
    }
})

module.exports = RightAnswer;