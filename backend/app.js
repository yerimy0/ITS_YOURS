const express = require('express');
const logger = require('morgan');

const memberRouter = require('./src/routes/MemberRouter');
const productsRouter = require('./src/routes/ProductsRouter');
const qnaRouter = require('./src/routes/QnaRouter');
const postRouter = require('./src/routes/PostRouter');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
import cors from 'cors';

require('dotenv').config();
mongoose.connect(
	`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@itsyours.gerbwmz.mongodb.net/`,
);
mongoose.connection.on('connected', () => {
	console.log('MongoDB Connected');
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/qna', qnaRouter);
app.use('/api/members', memberRouter);
app.use('/api/products', productsRouter);
app.use('/api/community', postRouter);

app.use(cors());

module.exports = app;
