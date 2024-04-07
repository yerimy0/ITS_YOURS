const { Router } = require("express");

const {
  productsList,
  searchProduct,
  productInfo,
} = require("../controllers/ProductsController");

const router = Router();

router.get("/productsList", productsList);
router.get("/searchProduct", searchProduct);
router.get("/productInfo?", productInfo);

module.exports = router;
