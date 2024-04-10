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
	description,
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
		description: description,
	};

	const product = await Products.create(newProduct);
	return product;
}

//상품정보 수정
async function updateProduct(
	prodId,
	{ name, imgUrls, price, author, publisher, condition, region, description },
) {
	try {
		const product = await Products.findOne({ _id: prodId });

		if (product.deletedAt) {
			throw new Error('이미 삭제된 상품입니다.');
		}
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
				region: region,
				description: description,
				updatedAt: Date.now() + 9 * 60 * 60 * 1000,
			},
		);
		const result = await Products.findOne({ _id: prodId });

		return result;
	} catch (error) {
		throw new Error('상품 정보를 업데이트하는 동안 오류가 발생했습니다.');
	}
}

// 상품 정보 삭제
async function deleteProduct(prodId) {
	try {
		// 상품을 삭제하고자 하는 정보로 업데이트합니다.
		const product = await Products.findOne({ _id: prodId });
		if (product.deletedAt) {
			throw new Error('이미 삭제된 상품입니다.');
		}
		await Products.findOneAndUpdate(
			{ _id: prodId },
			{ deletedAt: Date.now() + 9 * 60 * 60 * 1000 },
		);
		const result = await Products.findOne({ _id: prodId });

		return result;
	} catch (error) {
		throw new Error('상품 정보를 삭제하는 동안 오류가 발생했습니다.');
	}
}

async function tradedProductsByBuyerId(buyerId) {
	await Products.find({ buyerId, isCompleted: true });
}

module.exports = {
	getProductsList,
	searchProduct,
	getProductInfo,
	insertProduct,
	updateProduct,
	deleteProduct,
	tradedProductsByBuyerId,
};
