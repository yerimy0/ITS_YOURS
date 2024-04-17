const mongoose = require('mongoose');

const MembersSchema = require('./schemas/Members');
const ProductsSchema = require('./schemas/Products');

const QnaSchema = require('./schemas/Qna');

const PostsSchema = require('./schemas/Posts');
const CommentsSchema = require('./schemas/Comments');
const WishesSchema = require('./schemas/Wishes');
const CategorySchema = require('./schemas/Category');
const ChatroomSchema = require('./schemas/Chatroom');
const ChatMessageSchema = require('./schemas/ChatMessage');

exports.Members = mongoose.model('Members', MembersSchema);
exports.Products = mongoose.model('Products', ProductsSchema);

exports.Qna = mongoose.model('Qna', QnaSchema);

exports.Posts = mongoose.model('Posts', PostsSchema);
exports.Comments = mongoose.model('Comments', CommentsSchema);
exports.Wishes = mongoose.model('Wisher', WishesSchema);
exports.Category = mongoose.model('Category', CategorySchema);
exports.Chatroom = mongoose.model('Chatroom', ChatroomSchema);
exports.ChatMessage = mongoose.model('ChatMessageSchema', ChatMessageSchema);
