const { Router } = require('express');

const { createQna, updateQna } = require('../controllers/QnaController');

const router = Router();
// Q&A
router.post('/', createQna);
router.put('/', updateQna);

module.exports = router;
