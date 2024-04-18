const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const {
	createChatroom,
	getChatroomList,
	saveChatMessage,
	giveGoodManners,
	giveBadManners,
	confirmPurchase,
	quitChatroom,
} = require('../controllers/ChatController');

const router = Router();

// 채팅방 만들기
router.post('/:productId/:sellerId/:buyerNickName', validateToken, createChatroom);

// 채팅방 목록 보기
router.get('/:memberId', validateToken, getChatroomList);

//채팅방 메세지 저장하기
router.post('/', validateToken, saveChatMessage);

//좋아요 반영하기
router.put('/thumbsUp', validateToken, giveGoodManners);

//비판하기 반영하기
router.put('/thumbsDown', validateToken, giveBadManners);

//구매확정
router.put('/confirmBuying', validateToken, confirmPurchase);

//채팅방 나가기
router.delete('/:productId/:sellerId/:buyerId', validateToken, quitChatroom);

module.exports = router;
