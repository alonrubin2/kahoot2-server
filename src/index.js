const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./config/routes');
const Quiz = require('./models/quiz');
const Answer = require('./models/Answer');
// const Answer = require('./models/Answer');
// **** we should transition to axios at some point
// const axios = require('axios').default;

const app = express();
const port = 4000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);




mongoose.connect('mongodb://localhost/kahoot', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(port, () => {
        console.log('Listening om http://localhost:' + port);
    });
});