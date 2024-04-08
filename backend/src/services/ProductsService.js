const { Products } = require("../models/index");

async function productsList() {
  const productsList = await Products.find();

  return productsList;
}

async function searchProduct(name) {
  const result = await Products.find({ name });
  return result;
}

async function productInfo(id) {
  const result = await Products.find({ id });
  return result;
}

async function insertProduct({ name, imgUrls, price, author, publisher, condition, region, description }) {
  const newProduct = {
    name: name,
    imgUrls: imgUrls,
    price: price,
    author: author,
    publisher: publisher,
    condition: condition,
    region: region,
    description: description
  }

  const product = await Products.create(newProduct);
  return product;
}

async function updateProduct(prodId, { name, imgUrls, price, author, publisher, condition, region, description }) {
  try {
    // 상품을 업데이트하고자 하는 정보로 업데이트합니다.
  await Products.findOneAndUpdate(
      { _id: prodId },
      { name: name, 
        imgUrls: imgUrls, 
        price: price, 
        author: author, 
        publisher: publisher, 
        condition: condition, 
        region: region, 
        description: description, 
        updatedAt: Date.now() + 9 * 60 * 60 * 1000 
      }
    );
    const result = await Products.findOne({ _id: prodId });
    return result;
  } catch (error) {
    throw new Error('상품 정보를 업데이트하는 동안 오류가 발생했습니다.');
  }
}

module.exports = { productsList, searchProduct, productInfo, insertProduct, updateProduct };
