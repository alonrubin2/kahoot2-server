const mongoose = require('mongoose');


const WrongAnswer = mongoose.model('WrongAnswer', {
    answer: {
        type: String
    }
})

module.exports = WrongAnswer;