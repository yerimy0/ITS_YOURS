const chatService = require('../services/ChatService');
const ObjectId = require('mongodb').ObjectId;
const {
	NotFoundError,
	BadRequestError,
	InternalServerError,
	ConflictError,
	ForbiddenError,
	UnauthorizedError,
} = require('../config/CustomError');

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

		const newChatroom = await chatService.createChatroom(buyerId, productId, sellerId);

		res.status(200).json(newChatroom);
	} catch (err) {
		next(err);
	}
};

//채팅방 목록 불러오기
const getChatroomList = async (req, res, next) => {
	try {
		const memberId = req.user._id;
		const memberObjectId = new ObjectId(memberId);

		if (!memberId) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		const chatList = await chatService.getChatroomList(memberObjectId);

		res.status(200).json(chatList);
	} catch (err) {
		next(err);
	}
};

const saveChatMessage = async (req, res, next) => {};
module.exports = {
	createChatroom,
	getChatroomList,
	saveChatMessage,
};
