const { Router } = require("express");
const { signUp, login } = require("../controllers/MemberController");

const router = Router();

router.post('/signUp', signUp);
router.post('/login', login);


module.exports = router;