const { Schema } = require('mongoose');

const CategorySchema = new Schema({
	region: {
		type: String, // 구 이름
		unique: true,
		required: true,
	},
	universities: [
		{
			type: String, // 대학 이름들을 담는 배열
			required: true,
		},
	],
});

module.exports = CategorySchema;
