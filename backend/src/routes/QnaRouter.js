const { Router } = require('express');

const {
	createQna,
	updateQna,
	getAllQna,
	deleteQna,
	getMyQna,
} = require('../controllers/QnaController');

const router = Router();
// Q&A
router.post('/', createQna);
router.put('/', updateQna);
router.get('/', getAllQna);
router.delete('/', deleteQna);
router.get('/', getMyQna);

module.exports = router;
