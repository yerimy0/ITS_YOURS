const { Schema, SchemaTypes } = require('mongoose');

/*
 * 채팅메세지 Schema
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-18
 */
const ChatMessageSchema = new Schema({
	// 채팅방 id
	chatRoomId: {
		type: SchemaTypes.ObjectId,
		ref: 'Chatroom',
		required: true,
	},
	//메세지 내용
	content: {
		type: SchemaTypes.ObjectId,
		required: true,
		ref: 'Members',
	},

	// 채팅 작성자
	chatAuth: {
		type: SchemaTypes.ObjectId,
		required: true,
		ref: 'Chatroom',
	},
	// 채팅메세지 생성일자
	chatCreatedAt: {
		type: Date,
		default: Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = ChatMessageSchema;
