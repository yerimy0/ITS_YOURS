const { Products } = require("../models");

async function productsList() {
  const productsList = await Products.find();

  return productsList;
}

async function searchProduct(name, author) {
  const result = await Products.find({ name });
  return result;
}

module.exports = { productsList, searchProduct };
