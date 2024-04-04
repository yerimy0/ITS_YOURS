const { Router } = require("express");

const { signUp } = require("../controllers");

const router = Router();

router.post('/signup', signup);

module.exports = router;