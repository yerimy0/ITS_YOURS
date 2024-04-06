const productsService = require("../services/ProductsService");
const ObjectId = require("mongodb").ObjectId;

// 상품 전체목록 조회
async function productsList(req, res) {
  try {
    const result = await productsService.productsList();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "failed" });
  }
}

//상품 검색
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

// 상품 상세정보 조회
const productInfo = async (req, res) => {
  try {
    const id = req.query;
    const prodObjectId = new ObjectId(id);
    const productService = new productService();
    const result = await productService.productInfo(prodObjectId);

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const insertProduct = async(req, res, next) => {
  try {
    const {
      name,
      imgUrls,
      price,
      author,
      publisher,
      condition,
      region,
      description
    } = req.body;

    const product = await productsService.insertProduct(
      name,
      imgUrls,
      price,
      author,
      publisher,
      condition,
      region,
      description
    );

    if(!product) {
      throw new Error('서버 오류');
    }
    res.status(200).json({ data: product, message: "상품정보 추가 성공" });
  } catch(err) {
    next(err);
  }
};

module.exports = { productsList, searchProduct, productInfo, insertProduct };
