const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');

const {
	createQna,
	updateQna,
	getAllQna,
	deleteQna,
	getMyQna,
	answerQna,
} = require('../controllers/QnaController');

const router = Router();
// Q&A
router.post('/', validateToken, createQna);
router.put('/', validateToken, updateQna);
router.get('/admin', validateToken, getAllQna);
router.delete('/', validateToken, deleteQna);
router.get('/', validateToken, getMyQna);
router.post('/answer/:qnaId', validateToken, answerQna);

module.exports = router;
