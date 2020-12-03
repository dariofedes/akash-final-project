/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./src/models/questionModel');
const Answer = require('./src/models/answerModel');
const questionRouter = require('./src/routers/questionRouter')(Question, Answer);
const answerRouter = require('./src/routers/answerRouter')(Answer);

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const URLDB = 'mongodb://localhost/codeflowdb';

mongoose.connect(URLDB, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/questions', questionRouter);
app.use('/answers', answerRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
