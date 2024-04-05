const productsService = require("../service/ProductsService");

async function productsList(req, res) {
  try {
    const result = await productsService.productsList();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "failed" });
  }
}

const searchProduct = async (req, res, next) => {
  try {
    const name = req.query;
    const productsService = new productsService();
    const result = await productsService.searchProduct(name);

    res.status(200).json({
      message: "검색 성공",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { productsList, searchProduct };
