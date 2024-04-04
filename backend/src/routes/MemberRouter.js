const { Router } = require("express");

const { signUp, getUserInfo } = require("../controllers");

const router = Router();

router.post("/signup", signUp);
router.post("/user/me", getUserInfo);

module.exports = router;
