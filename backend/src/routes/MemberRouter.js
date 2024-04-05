const { Router } = require("express");
const { signUp, login } = require("../controllers/MemberController");

const router = Router();

//회원가입
router.post('/signUp', signUp);
//로그인
router.post('/login', login);


module.exports = router;