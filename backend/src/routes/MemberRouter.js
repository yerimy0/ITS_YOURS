const { Router } = require("express");
const {
  signUp,
  login,
  getMemberInfo,
} = require("../controllers/MemberController");

const router = Router();
// 회원가입
router.post("/signUp", signUp);
// 로그인
router.post("/login", login);
// 회원정보 조회
router.get("/me", getMemberInfo);

module.exports = router;
