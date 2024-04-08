const { Router } = require('express');

const {
  getProductsList,
  searchProduct,
  getProductInfo,
  insertProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/ProductsController');

const router = Router();

router.get('/list', getProductsList);
router.get('/search', searchProduct);
router.get('/:prodId', getProductInfo);

router.post('/', insertProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;
