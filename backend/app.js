const express = require('express');
const logger = require('morgan');

const insertDataRouter = require('./src/routes/InsertDataRouter');
const memberRouter = require('./src/routes/MemberRouter');
const productsRouter = require('./src/routes/ProductsRouter');
const qnaRouter = require('./src/routes/QnaRouter');
const postRouter = require('./src/routes/PostRouter');
const commentRouter = require('./src/routes/CommentRouter');
const wishRouter = require('./src/routes/WishesRouter');
const categoriesRouter = require('./src/routes/CategoryRouter');
const errorHandler = require('./src/middlewares/ErrorHandler');

const cors = require('cors');

const mongoose = require('mongoose');

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
app.use(express.urlencoded({ extended: true }));
//
const corsOptions = {
	origin: ['http://localhost:5173', 'http://34.47.86.42'],
	credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
	console.log('Hello World');
	return res.send('GET: Hello World');
});

app.post('/', (req, res) => {
	console.log('Hello World');
	return res.send('POST: Hello World');
});

app.use('/api/scripts', insertDataRouter);
app.use('/api/qna', qnaRouter);
app.use('/api/members', memberRouter);
app.use('/api/products', productsRouter);
app.use('/api/community', postRouter);
app.use('/api/community', commentRouter);
app.use('/api/wishes', wishRouter);
app.use('/api/categories', categoriesRouter);
app.use(errorHandler);

module.exports = app;
