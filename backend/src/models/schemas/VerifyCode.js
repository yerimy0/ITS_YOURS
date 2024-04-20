const { Schema } = require('mongoose');

/**
 * 인증코드 스키마
 * 작성자 : 이정은
 * 작성시작일 : 2024-04-18
 */

const VerifyCodeSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
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
