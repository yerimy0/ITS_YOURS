const { Router } = require("express");

const { productList } = require("../controllers/ProductsController");

const router = Router();

router.post("/productList", productList);

module.exports = router;
