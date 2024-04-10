const { Schema } = require('mongoose');

/**
 * 커뮤니티 댓글 Schema
 * 작성자 : 류효종
 * 작성 시작일 : 2024-04-08
 */
const CommentSchema = new Schema({
	// 글 작성자
	writer: {
		type: String,
		required: true,
	},
	profile: {
		type: String,
	},
	// 댓글 내용
	content: {
		type: String,
		required: true,
	},
	// 댓글 삭제일자
	createdAt: {
		type: Date,
		default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = CommentSchema;
