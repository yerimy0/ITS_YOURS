const { Wishes } = require('../models');

async function toggleWish(userId, productId) {
	const existingWish = await Wishes.findOne({ userId, productId });
	if (existingWish) {
		// 이미 찜을 했다면 삭제
		await Wishes.deleteOne({ _id: existingWish._id });
		return { message: '찜 목록에서 삭제되었습니다.', deleted: true };
	} else {
		// 찜을 하지 않았다면 추가
		const newWishes = new Wishes({ userId, productId });
		await newWishes.save();
		return { message: '찜 목록에 추가되었습니다.', added: true };
	}
}

async function getWishesByUser(userId) {
	const wishes = await Wishes.find({ userId }).populate('productId');
	return wishes;
}

module.exports = { toggleWish, getWishesByUser };
