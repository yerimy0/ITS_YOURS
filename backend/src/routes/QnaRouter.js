const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');

const {
	createQna,
	updateQna,
	getAllQna,
	deleteQna,
	getMyQna,
} = require('../controllers/QnaController');

const router = Router();
// Q&A
router.post('/', validateToken, createQna);
router.put('/', validateToken, updateQna);
router.get('/admin', validateToken, getAllQna);
router.delete('/', validateToken, deleteQna);
router.get('/', validateToken, getMyQna);

module.exports = router;
