const { Schema, SchemaTypes } = require('mongoose');

/**
 * 커뮤니티 댓글 Schema
 * 작성자 : 류효종
 * 작성 시작일 : 2024-04-08
 */
const CommentsSchema = new Schema({
	// 게시글 id
	postId: {
		type: SchemaTypes.ObjectId,
		ref: 'Posts',
		required: true,
	},
	// 댓글내용
	content: {
		type: String,
		required: true,
	},
	// 사용자 id (작성자)
	// userId: {
	// 	type: SchemaTypes.ObjectId,
	// 	required: true,
	// 	ref: 'Members',
	// },
	nickName: {
		type: String,
		// type: SchemaTypes.ObjectId,
		required: true,
	},
	profilePic: {
		type: String,
	},
	// 댓글 생성일자
	createdAt: {
		type: Date,
		default: Date.now() + 9 * 60 * 60 * 1000,
	},
	// 댓글 수정일자
	updatedAt: {
		type: Date,
	},
	// 댓글 삭제일자
	deletedAt: {
		type: Date,
	},
});

module.exports = CommentsSchema;
