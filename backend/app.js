const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@itsyours.gerbwmz.mongodb.net/`
  );
  mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
  });
  
var app = express();

app.use(logger('dev'));
app.use(express.json());

module.exports = app;
