const { Router } = require("express");

const {
  productsList,
  searchProduct,
} = require("../controllers/ProductsController");

const router = Router();

router.post("/productsList", productsList);
router.post("/searchProduct", searchProduct);

module.exports = router;
