const { Schema, SchemaTypes } = require('mongoose');

/*
 * 채팅방 Schema
 * 작성자 : 김고은
 * 작성 시작일 : 2024-04-17
 */
const ChatroomSchema = new Schema({
	// 채팅 판매글 id (상품id)
	productId: {
		type: SchemaTypes.ObjectId,
		ref: 'Products',
		required: true,
	},
	// 구매자 id
	buyerId: {
		type: SchemaTypes.ObjectId,
		required: true,
		ref: 'Members',
	},

	// 판매자 id
	sellerId: {
		type: SchemaTypes.ObjectId,
		required: true,
		ref: 'Members',
	},

	// 채팅방 상태
	isActivated: {
		type: Boolean,
		default: true,
	},

	// 채팅방 생성일자
	createdAt: {
		type: Date,
		default: Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = ChatroomSchema;
