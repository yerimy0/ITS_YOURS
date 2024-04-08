const mongoose = require("mongoose");

const MembersSchema = require("./schemas/Members");
const ProductsSchema = require("./schemas/Products");

const QnaSchema = require("./schemas/Qna");
const PostsSchema = require("./schemas/Posts");

exports.Members = mongoose.model("Members", MembersSchema);
exports.Products = mongoose.model("Products", ProductsSchema);
exports.Qna = mongoose.model("Qna", QnaSchema);
exports.Posts = mongoose.model("Posts", PostsSchema);
