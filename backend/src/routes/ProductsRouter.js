const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');

const {
	getProductsList,
	searchProduct,
	getProduct,
	getProductInfo,
	insertProduct,
	updateProduct,
	deleteProduct,
	myTradedProducts,
} = require('../controllers/ProductsController');

const router = Router();

router.get('/list', getProductsList);
router.get('/search', searchProduct);
router.get('/:prodId', getProduct);
router.get('/', getProductInfo);
router.get('/myTradedProducts', myTradedProducts);

//상품 등록
router.post('/', validateToken, insertProduct);
//상품 정보 수정
router.put('/', updateProduct);
//상품 삭제
router.delete('/', deleteProduct);

module.exports = router;
