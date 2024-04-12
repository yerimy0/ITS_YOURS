const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
router.get('/myTradedProducts/:buyerId', validateToken, myTradedProducts);

// 상품 등록
router.post('/', validateToken, upload.array('imgUrls', 3), insertProduct);

// 상품 수정
router.put('/', validateToken, upload.array('imgUrls', 3), updateProduct);

//상품 삭제
router.delete('/', deleteProduct);

module.exports = router;
