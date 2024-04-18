const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const {
	createChatroom,
	getChatroomList,
	saveChatMessage,
} = require('../controllers/ChatController');

const router = Router();

// 채팅방 만들기
router.post('/:productId/:sellerId/:buyerNickName', validateToken, createChatroom);

// 채팅방 목록 보기
router.get('/:memberId', validateToken, getChatroomList);

//채팅방 메세지 저장하기
router.post('/', validateToken, saveChatMessage);

module.exports = router;
