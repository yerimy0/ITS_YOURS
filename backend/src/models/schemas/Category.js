const { Schema } = require('mongoose');

const CategorySchema = new Schema({
	region: {
		type: String, // 구 이름
		unique: true,
		required: true,
	},
	universities: [
		{
			name: {
				type: String, // 대학 이름
				required: true,
			},
			latitude: {
				type: Number, // 대학 정문의 위도
				required: true,
			},
			longitude: {
				type: Number, // 대학 정문의 경도
				required: true,
			},
		},
	],
});

module.exports = CategorySchema;
