const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const { toggleWish, getWishes } = require('../controllers/WishesController');

const router = Router();
// 찜 - 토글
router.post('/toggle', validateToken, toggleWish);
router.get('/:userId', validateToken, getWishes);

module.exports = router;
