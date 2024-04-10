const productsService = require('../services/ProductsService');
const ObjectId = require('mongodb').ObjectId;
const axios = require('axios');

// 상품 전체목록 조회
async function getProductsList(req, res) {
	try {
		const result = await productsService.getProductsList();
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: 'failed' });
	}
}

//상품 검색
const searchProduct = async (req, res, next) => {
	try {
		const { name } = req.query; // query에서 name 값을 가져옵니다.
		const result = await productsService.searchProduct(name);

		res.status(200).json({
			message: '검색 성공',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};
//상품 목록 > 상품 상세정보 조회
const getProduct = async (req, res) => {
	try {
		const prodId = req.params.prodId;
		const prodObjectId = new ObjectId(prodId);

		const result = await productsService.getProductInfo(prodObjectId);
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ err });
	}
};

//상품등록-상품 상세정보 알라딘 api로 가져오기
const getProductInfo = async (req, res) => {
	try {
		const { name } = req.body;
		//알라딘 상품검색 API 연동
		const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.TTBKey}
			&Query=${name}&QueryType=Title&MaxResults=100&start=1
			&SearchTarget=Book&output=js&Version=20131101`;

		const response = await axios.get(apiUrl);

		const productData = response.data.item;

		const productDatas = productData.map(item => ({
			title: item.title,
			author: item.author,
			publisher: item.publisher,
			cover: item.cover,
		}));

		res.status(200).json({ data: productDatas, message: '상품등록-상품정보 검색 성공' });

		return productDatas;
	} catch (err) {
		next(err);
	}
};

//상품정보 추가
const insertProduct = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const { name, imgUrls, price, author, publisher, condition, region, description } = req.body;
		const product = await productsService.insertProduct({
			userId,
			name,
			imgUrls,
			price,
			author,
			publisher,
			condition,
			region,
			description,
		});

		if (!product) {
			throw new Error('서버 오류');
		}
		res.status(200).json({ data: product, message: '상품정보 추가 성공' });
	} catch (err) {
		next(err);
	}
};

//상품정보 수정
const updateProduct = async (req, res, next) => {
	try {
		const { prodId } = req.query;
		const prodObjectId = new ObjectId(prodId); // 상품의 _id 값

		// 수정하고자 하는 상품 정보
		const { name, imgUrls, price, author, publisher, condition, region, description } = req.body;
		// productsService.updateProduct 함수를 호출하여 상품 정보를 수정
		const updatedProduct = await productsService.updateProduct(prodObjectId, {
			name,
			imgUrls,
			price,
			author,
			publisher,
			condition,
			region,
			description,
		});

		res.status(200).json({
			message: '상품 정보 수정 성공',
			data: updatedProduct,
		});
	} catch (error) {
		next(error);
	}
};

//상품정보 삭제
const deleteProduct = async (req, res, next) => {
	try {
		const { prodId } = req.query;
		const prodObjectId = new ObjectId(prodId); // 상품의 _id 값
		const deletedProduct = await productsService.deleteProduct(prodObjectId);

		res.status(200).json({
			message: '상품 정보 삭제 성공',
			data: deletedProduct,
		});
	} catch (err) {
		next(err);
	}
};

// 구매내역 조회
const myTradedProducts = async (req, res) => {
	const buyerId = req.user.id;
	console.log(buyerId);

	try {
		const tradedProducts = await productsService.tradedProductsByBuyerId(buyerId);

		// 성공적으로 결과를 클라이언트에 전송합니다.
		return res.status(200).json({ message: '주문 내역 조회 성공!!!!!', data: tradedProducts });
	} catch (error) {
		return res.status(500).json({ message: '서버 내부 오류가 발생했습니다.' });
	}
};

module.exports = {
	getProductsList,
	searchProduct,
	getProduct,
	getProductInfo,
	insertProduct,
	updateProduct,
	deleteProduct,
	myTradedProducts,
};
