const productsService = require("../service/ProductsService");

async function productsList(req, res) {
  try {
    const result = await productsService.productsList();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "failed" });
  }
}

module.exports = productsList;
