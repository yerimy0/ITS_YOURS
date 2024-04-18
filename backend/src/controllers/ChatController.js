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

		if (!buyerId) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
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

		// 사용자의 권한 확인
		const isAuthorized = chatList.some(
			chatroom =>
				chatroom.buyerId.toString() === memberId.toString() ||
				chatroom.sellerId.toString() === memberId.toString(),
		);

		if (!isAuthorized) {
			throw new UnauthorizedError('권한이 없습니다.');
		}

		res.status(200).json(chatList);
	} catch (err) {
		next(err);
	}
};
//채팅방 메세지 저장
const saveChatMessage = async (req, res, next) => {};

//칭찬하기
const giveGoodManners = async (req, res, next) => {
	try {
		const { like } = req.params;

		// 멤버의 좋아요 수 업데이트
		await memberService.updateLikeCount(like);

		res.status(200).json({ message: '좋아요가 반영되었습니다.' });
	} catch (err) {
		next(err);
	}
};
//비판하기

//구매확정
module.exports = {
	createChatroom,
	getChatroomList,
	saveChatMessage,
	giveGoodManners,
};
