const express = require("express");
const logger = require("morgan");
const memberRouter = require("./src/routes/MemberRouter");
const productsRouter = require("./src/routes/ProductsRouter");
const orderRouter = require("./src/routes/OrderRouter");
<<<<<<< HEAD
const qnaRouter = require("./src/routes/QnaRouter");
=======
const postRouter = require("./src/routes/PostRouter");
>>>>>>> 2c2b5baf950efece24ccc18d6acfccb64ffb5f8d
const insertBooks = require("./src/scripts/insertBooks");
const mongoose = require("mongoose");

require("dotenv").config();
mongoose.connect(
  `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@itsyours.gerbwmz.mongodb.net/`
);
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/qna", qnaRouter);
app.use("/api/orders", orderRouter);
app.use("/api/members", memberRouter);
app.use("/api/products", productsRouter);
app.use("/api/community", postRouter);
app.use("/scripts", insertBooks);

module.exports = app;
