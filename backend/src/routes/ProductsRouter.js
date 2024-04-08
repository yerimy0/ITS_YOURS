const { Router } = require("express");

const {
  productsList,
  searchProduct,
  productInfo,
  insertProduct,
  updateProduct
} = require("../controllers/ProductsController");

const router = Router();

router.get("/productsList", productsList);
router.get("/searchProduct", searchProduct);
router.get("/productInfo?", productInfo);

router.post('/', insertProduct);
router.put('/', updateProduct);
router.delete

module.exports = router;
