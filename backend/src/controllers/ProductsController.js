const productsService = require('../services/ProductsService');
const ObjectId = require('mongodb').ObjectId;
const axios = require('axios');

const getProductsList = async (req, res) => {
	try {
		const result = await productsService.getProductsList();
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: 'failed' });
	}
};

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

const getProductInfo = async (req, res) => {
	try {
		const { name } = req.params;

		const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.TTBKey}&Query=${name}&QueryType=Title&MaxResults=100&start=1&SearchTarget=Book&output=js&Version=20131101`;

		const response = await axios.get(apiUrl);
		const productData = response.data.item;

		const productDatas = productData.map(item => ({
			title: item.title,
			author: item.author,
			publisher: item.publisher,
			cover: item.cover,
		}));

		res.status(200).json({ data: productDatas, message: '상품등록-상품정보 검색 성공' });
	} catch (err) {
		res.status(400).json({ err });
	}
};

//상품정보 추가
const insertProduct = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const region = req.user.region;
		const schoolName = req.user.schoolName;

		if (!userId) {
			throw new Error('로그인이 필요한 서비스입니다.');
		}
		// multer 미들웨어를 통해 업로드된 파일 정보는 req.files에 저장됩니다.
		// 업로드된 이미지의 경로들을 imgUrls 배열로 구성합니다.
		//const imgUrls = req.files.map(file => file.path);

		const { name, imgUrls, price, author, publisher, condition, description, longitude, latitude } =
			req.body;
		const product = await productsService.insertProduct({
			userId,
			name,
			imgUrls, // multer를 통해 업로드된 이미지 URL 배열
			price,
			author,
			publisher,
			condition,
			longitude,
			latitude,
			region,
			schoolName,
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

		// 상품 정보 조회
		const product = await productsService.getProductInfo(prodObjectId);

		// 현재 로그인한 사용자의 ID
		const userId = req.user.id;

		// 상품을 올린 사용자와 현재 로그인한 사용자가 다른 경우
		if (product.sellerId.toString() !== userId) {
			return res.status(403).json({
				message: '상품을 올린 사용자만이 수정할 수 있습니다.',
			});
		}

		const imgUrls = req.files?.map(file => file.path);

		const { name, price, author, publisher, condition, description } = req.body;
		// imgUrls가 존재하면 상품 정보 업데이트에 포함, 그렇지 않으면 기존 값 유지
		const updatedProduct = await productsService.updateProduct(prodObjectId, {
			name,
			...(imgUrls?.length > 0 && { imgUrls }), // 조건부로 imgUrls 포함
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

		// 상품 정보 조회
		const product = await productsService.getProductInfo(prodObjectId);

		// 현재 로그인한 사용자의 ID
		const userId = req.user.id;

		// 상품을 올린 사용자와 현재 로그인한 사용자가 다른 경우
		if (product.sellerId.toString() !== userId) {
			return res.status(403).json({
				message: '상품을 올린 사용자만이 삭제할 수 있습니다.',
			});
		}

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

	try {
		const tradedProducts = await productsService.tradedProductsByBuyerId(buyerId);

		// 성공적으로 결과를 클라이언트에 전송합니다.
		return res.status(200).json({ message: '주문 내역 조회 성공!!!!!', data: tradedProducts });
	} catch (error) {
		return res.status(500).json({ message: '서버 내부 오류가 발생했습니다.' });
	}
};

// 판매내역 조회
const mySalesHistory = async (req, res) => {
	const sellerId = req.user.id;

	try {
		const mySalesHistory = await productsService.tradedProductsBySellerId(sellerId);

		return res.status(200).json({ message: '판매내역 조회 성공', data: mySalesHistory });
	} catch (error) {
		return res.status(500).json({ message: '판매내역 조회중 오류가 발생했습니다.' });
	}
};

// 판매내역 삭제
const deleteSalesHis = async (req, res) => {
	try {
		const { prodId } = req.params;
		const prodObjectId = new ObjectId(prodId);
		const sellerId = req.user.id;
		const deleteSalesHis = await productsService.deleteSalesHis(sellerId, prodObjectId);

		if (!deleteSalesHis) {
			return res.status(404).send({ message: '판매내역을 찾을 수 없습니다.' });
		}

		res.status(200).send({ message: '판매내역이 삭제되었습니다.', deleteSalesHis });
	} catch (error) {
		res.status(500).send({
			message: '판매내역 삭제 중 오류가 발생했습니다.',
			error: error.message,
		});
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
	mySalesHistory,
	deleteSalesHis,
};
