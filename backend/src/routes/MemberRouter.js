const { Router } = require("express");
const {
  signUp,
  login,
  getMemberInfo,
} = require("../controllers/MemberController");

const router = Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/me", getMemberInfo);

module.exports = router;
