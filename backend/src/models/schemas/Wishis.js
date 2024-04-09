const { Schema } = require('mongoose');

/**
 * 찜 목록 Schema
 * 작성자 : 류효종
 * 작성 시작일 : 2024-04-08
 */
const WishesSchema = new Schema({
	// 상품명
	prodName: {
		type: String,
		required: true,
	},
	// 상품 판매가
	prodPrice: {
		type: Number,
		required: true,
	},
	// 찜 등록일
	createdAt: {
		type: Date,
		default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = WishesSchema;
