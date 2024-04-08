const { Router } = require("express");

const { createQna } = require("../controllers/QnaController");

const router = Router();
// Q&A
router.post("/", createQna);

module.exports = router;
