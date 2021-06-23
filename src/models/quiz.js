const mongoose = require('mongoose');


const Quiz = mongoose.model('Quiz', {
    questions: [mongoose.ObjectId],
    user: {
        type: mongoose.ObjectId,
        // required: true,
        ref: 'User'
    }
})

module.exports = Quiz;
