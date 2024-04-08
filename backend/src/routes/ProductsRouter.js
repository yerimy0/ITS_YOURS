const { Router } = require("express");

const {
  productsList,
  searchProduct,
  productInfo,
  insertProduct,
} = require("../controllers/ProductsController");

const router = Router();

router.get("/productsList", productsList);
router.get("/searchProduct", searchProduct);
router.get("/productInfo", productInfo);

router.post("/", insertProduct);

module.exports = router;
