const mongoose = require('mongoose');

const MembersSchema = require('./schemas/Members');
const ProductsSchema = require('./schemas/Products');
<<<<<<< Updated upstream
const QnaSchema = require('./schemas/Qna');
=======
>>>>>>> Stashed changes
const PostsSchema = require('./schemas/Posts');

exports.Members = mongoose.model('Members', MembersSchema);
exports.Products = mongoose.model('Products', ProductsSchema);
<<<<<<< Updated upstream
exports.Qna = mongoose.model('Qna', QnaSchema);
=======
>>>>>>> Stashed changes
exports.Posts = mongoose.model('Posts', PostsSchema);
