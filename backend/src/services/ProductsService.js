const { Products } = require("../models");

async function productsList() {
  const productsList = await Products.find();

  return productsList;
}

module.exports = productsList;
