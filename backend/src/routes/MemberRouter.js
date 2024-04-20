const { Router } = require('express');
const upload = require('../middlewares/MulterConfig');

const {
	signUp,
	login,
	getMember,
	getSellerInfo,
	updateMember,
	deleteMember,
	findId,
	resetPassword,
	sendVerifyEmail,
	verifyCode,
} = require('../controllers/MemberController');
const validateToken = require('../middlewares/ValidateToken');

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
router.put('/me', validateToken, upload.single('profilePic'), updateMember);
// 회원정보 삭제
router.delete('/me', validateToken, deleteMember);

// 아이디 찾기
router.post('/findId', findId);
// 비밀번호 찾기
router.post('/findPassword', resetPassword);
// 회원가입 이메일 인증코드발급
router.post('/sendVerifyEmail', sendVerifyEmail);
// 인증번호 검증
router.post('/verifyCode', verifyCode);

module.exports = router;
