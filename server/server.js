//server.js
const express = require('express');
const app = express();
const test = require('./router/test');
const logger = require('morgan');

const mongoose = require('mongoose');
require('dotenv').config();

app.use('/api', test);

const port = 3002; //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


mongoose.connect(
  `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@itsyours.gerbwmz.mongodb.net/`
);
mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.static('views'));
app.use(express.urlencoded({ extended: false }));

module.exports = app;
