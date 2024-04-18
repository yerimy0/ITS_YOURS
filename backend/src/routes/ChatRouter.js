const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const { createChatroom } = require('../controllers/ChatController');

const router = Router();

// 채팅방 만들기
router.post('/:productId/:sellerId/:buyerNickName', validateToken, createChatroom);

// 채팅방 목록 보기

module.exports = router;
