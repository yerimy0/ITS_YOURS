const { Products } = require('../models/index');

async function getProductsList() {
	const productsList = await Products.find({ deletedAt: { $exists: false } });

	return productsList;
}

async function searchProduct(name) {
	try {
		// 대소문자 구분 없이 부분 일치하는 패턴을 생성합니다.
		const regex = new RegExp(`.*${name}.*`, 'i');

		// 상품 이름에 대해 정규 표현식을 사용하여 부분 일치하는 상품을 찾습니다.
		const result = await Products.find({ name: { $regex: regex }, deletedAt: { $exists: false } });

		// 부분 일치하는 상품이 없을 경우 빈 배열을 반환합니다.
		return result || [];
	} catch (error) {
		// 오류가 발생할 경우 오류를 throw합니다.
		throw new Error('상품 검색 중 오류가 발생했습니다.');
	}
}

//상품목록 > 상품 상세정보 조회
async function getProductInfo(prodId) {
	const result = await Products.findOne({ _id: prodId });
	return result;
}

//상품 등록(추가)
async function insertProduct({
	userId,
	name,
	imgUrls,
	price,
	author,
	publisher,
	condition,
	region,
	schoolName,
	description,
	longitude,
	latitude,
}) {
	const newProduct = {
		name: name,
		imgUrls: imgUrls,
		price: price,
		author: author,
		publisher: publisher,
		condition: condition,
		region: region,
		sellerId: userId,
		schoolName: schoolName,
		description: description,
		longitude: longitude,
		latitude: latitude,
	};

	const product = await Products.create(newProduct);
	return product;
}

//상품정보 수정
async function updateProduct(
	prodId,
	{ name, imgUrls, price, author, publisher, condition, description },
) {
	// 상품을 업데이트하고자 하는 정보로 업데이트합니다.
	await Products.findOneAndUpdate(
		{ _id: prodId },
		{
			name: name,
			imgUrls: imgUrls,
			price: price,
			author: author,
			publisher: publisher,
			condition: condition,
			description: description,
			updatedAt: Date.now() + 9 * 60 * 60 * 1000,
		},
	);
	const result = await Products.findOne({ _id: prodId });

	return result;
}

// 상품 정보 삭제
async function deleteProduct(prodId) {
	// 상품을 삭제하고자 하는 정보로 업데이트합니다.
	await Products.findOneAndUpdate({ _id: prodId }, { deletedAt: Date.now() + 9 * 60 * 60 * 1000 });
	const result = await Products.findOne({ _id: prodId });

	return result;
}

async function tradedProductsByBuyerId(buyerId) {
	// 거래 완료된 상품들 중 필요한 정보만 선택하여 조회
	const tradedProducts = await Products.find({ buyerId, isCompleted: true }).select(
		'name imgUrls price sellerId',
	);
	return tradedProducts;
}

// 판매내역 조회
async function tradedProductsBySellerId(sellerId) {
	const tradedProducts = await Products.find({ sellerId, deletedAt: { $exists: false } });
	return tradedProducts;
}

// 판매내역 삭제
async function deleteSalesHis(sellerId, prodId) {
	await Products.findOneAndUpdate({ _id: prodId }, { deletedAt: Date.now() + 9 * 60 * 60 * 1000 });
	const result = await Products.findOne({ _id: prodId });

	return result;
}

module.exports = {
	getProductsList,
	searchProduct,
	getProductInfo,
	insertProduct,
	updateProduct,
	deleteProduct,
	tradedProductsByBuyerId,
	tradedProductsBySellerId,
	deleteSalesHis,
};
