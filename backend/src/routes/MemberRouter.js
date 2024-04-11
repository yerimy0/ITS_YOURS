const { Router } = require('express');

const {
	signUp,
	login,
	getMember,
	updateMember,
	deleteMember,
} = require('../controllers/MemberController');
const validateToken = require('../middlewares/ValidateToken');

const router = Router();
// 회원가입
router.post('/signUp', signUp);
// 로그인
router.post('/login', login);
// 회원정보 조회
router.get('/me', validateToken, getMember);
// 회원정보 수정
router.put('/me', validateToken, updateMember);
// 회원정보 수정
router.delete('/me', validateToken, deleteMember);

module.exports = router;
