const { Router } = require('express');

const { getAllCategories } = require('../controllers/CategoryController');

const router = Router();
// Q&A
router.get('/', getAllCategories);

module.exports = router;
