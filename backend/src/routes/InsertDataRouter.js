const { Router } = require('express');

const { insertCategoryData, insertProductsData } = require('../scripts/InsertData');

const router = Router();

//상품 데이터 추가
router.post('/products', insertProductsData);
//카테고리 데이터 추가
router.post('/category', insertCategoryData);

module.exports = router;
