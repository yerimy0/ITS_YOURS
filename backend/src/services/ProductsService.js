const { Products } = require('../models/index');

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

async function insertProduct({
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
		description: description,
	};

	const product = await Products.create(newProduct);
	return product;
}

async function tradedProductsByBuyerId(buyerId) {
	await Products.find({ buyerId, isCompleted: true });
}

module.exports = {
	productsList,
	searchProduct,
	productInfo,
	insertProduct,
	tradedProductsByBuyerId,
};
