const { Schema } = require('mongoose');

/**
 * Q&A 스키마
 * 작성자 : 류효종
 * 작성시작일 : 2024-04-08
 */

const VerifyCodeSchema = new Schema({
	// Q&A 작성자
	email: {
		type: String,
		// required: true,
	},
	// Q&A 제목
	code: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = VerifyCodeSchema;
