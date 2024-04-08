const { Router } = require('express');
const {
	getProductsList,
	searchProduct,
	getProductInfo,
	insertProduct,
	updateProduct,
	deleteProduct,
	myTradedProducts,
} = require('../controllers/ProductsController');

const router = Router();

router.get('/list', getProductsList);
router.get('/search', searchProduct);
router.get('/:prodId', getProductInfo);
router.get('/myTradedProducts', myTradedProducts);

router.post('/', insertProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;
