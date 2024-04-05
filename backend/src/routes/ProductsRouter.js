const { Router } = require("express");

const {
  productsList,
  searchProduct,
} = require("../controllers/ProductsController");

const router = Router();

router.get("/productsList", productsList);
router.get("/searchProduct", searchProduct);

module.exports = router;
