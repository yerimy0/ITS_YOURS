const { Router } = require('express');

const {
	signUp,
	login,
	getMember,
	getSellerInfo,
	updateMember,
	deleteMember,
	findId,
	resetPassword,
} = require('../controllers/MemberController');
const validateToken = require('../middlewares/ValidateToken');
const upload = require('../config/MulterConfig');

const router = Router();
// 회원가입
router.post('/signUp', upload.single('profilePic'), signUp);
// 로그인
router.post('/login', login);
// 회원정보 조회
router.get('/me', validateToken, getMember);
//판매자 정보 조회
router.get('/sellerInfo', getSellerInfo);
// 회원정보 수정
router.put('/me', validateToken, updateMember);
// 회원정보 수정
router.delete('/me', validateToken, deleteMember);

// 아이디 찾기
router.post('/findId', findId);
// 비밀번호 찾기
router.post('/findPassword', resetPassword);

module.exports = router;
