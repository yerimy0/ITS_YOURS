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

//상품 전체목록
router.get('/list', getProductsList);
//상품 검색
router.get('/search', searchProduct);
//상품 상세정보 불러오기
router.get('/:prodId', getProduct);
//상품 등록 > 상품정보 검색 API
router.get('/searchBook/:name', getProductInfo);
//판매내역 조회
router.get('/myTradedProducts/:buyerId', validateToken, myTradedProducts);

// 상품 등록
router.post('/', validateToken, upload.array('imgUrls', 3), insertProduct);

// 상품 수정
router.put('/', validateToken, upload.array('imgUrls', 3), updateProduct);

//상품 삭제
router.delete('/', deleteProduct);

module.exports = router;
