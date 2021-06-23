const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./config/routes');
const Quiz = require('./models/quiz');
const RightAnswer = require('./models/rightAnswer');
// **** we should transition to axios at some point
// const axios = require('axios').default;

const app = express();
const port = 4000;


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// **** this will need to be activeated later when 
// **** we actually have working  routes
// app.use(routes);


app.get('/', (req, res) => {
    res.send('works!');
});

app.put('/answer', (req, res) => {
    const answer = new RightAnswer({
        answer: req.body.answer
    });
    const newAnswer = answer.save();
    res.status(201).send(newAnswer);
})

mongoose.connect('mongodb://localhost/kahoot', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    app.listen(port, ()=> {
        console.log('Listening om http://localhost:' + port);
    });
});