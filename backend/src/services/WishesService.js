const { Wishes, Products } = require('../models');

async function toggleWish(userId, productId) {
	const existingWish = await Wishes.findOne({ userId, productId });
	if (existingWish) {
		// 이미 찜을 했다면 삭제
		await Wishes.deleteOne({ _id: existingWish._id });

		// 찜 개수 줄이기 전에 Products에서 해당 상품 찾기
		const product = await Products.findById(productId);

		if (product.deletedAt) {
			throw new Error('이미 삭제된 상품에는 찜을 할 수 없습니다.');
		}
		// 만약 wishesCount가 0보다 크다면, 1 감소시키기
		if (product.wishesCount > 0) {
			await Products.findByIdAndUpdate(productId, { $inc: { wishesCount: -1 } });
		}

		// 업데이트된 상품 정보 반환
		const updatedProduct = await Products.findById(productId);
		return updatedProduct;
	} else {
		// 찜을 하지 않았다면 추가
		const newWish = new Wishes({ userId, productId });
		await newWish.save();

		// products 스키마의 wishesCount 1 증가
		await Products.findByIdAndUpdate(productId, { $inc: { wishesCount: 1 } });

		// 업데이트된 상품 정보 반환
		const updatedProduct = await Products.findById(productId);
		return updatedProduct;
	}
}

async function getWishesByUser(userId) {
	const wishes = await Wishes.find({ userId }).populate('productId');
	return wishes;
}

module.exports = { toggleWish, getWishesByUser };
