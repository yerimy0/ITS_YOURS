const ChatService = require('../services/ChatService');

/*
 * 채팅방 생성 controller
 * 작성자 : 김고은
 * 작성 시작일 : 2024-04-17
 * 기능 : 채팅방 생성시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const createChatroom = async (req, res, next) => {
	try {
		// 필요한값 상품 id, 판매자 id, 구매자 id,
		const buyerId = req.user._id;
		const { productId, sellerId } = req.params;

		const newChatroom = await ChatService.createChatroom(buyerId, productId, sellerId);

		res.status(200).json(newChatroom);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	createChatroom,
};
