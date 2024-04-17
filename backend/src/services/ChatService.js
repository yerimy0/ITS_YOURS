const { Chatroom } = require('../models');

/*
 * 채팅방 생성 service
 * 작성자 : 김고은
 * 작성 시작일 : 2024-04-17
 * 채팅방 생성시 동작되는 DB작업을 모아놓은 service입니다.
 */
async function createChatroom(productId, sellerId, buyerId) {
	const newRoomData = {
		productId: productId,
		sellerId: sellerId,
		buyerId: buyerId,
		createdAt: new Date(),
	};
	console.log(newRoomData);
	const createChatroom = await Chatroom.create(newRoomData);
	return createChatroom;
}

module.exports = {
	createChatroom,
};
