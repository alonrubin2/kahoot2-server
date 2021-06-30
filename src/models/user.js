const mongoose = require('mongoose');
const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        match: emailValidate
    },
    createdAt: {
        type: Date,
        default: () => new Date(),
        required: true
    },
    avatar: {
        type: String,
    },
    quizes: [mongoose.ObjectId],
    friends: [mongoose.ObjectId]
});


module.exports = User;
