const WishesService = require('../services/WishesService');

const toggleWish = async (req, res) => {
	try {
		const productId = req.body.productId;
		const userId = req.user.id;
		const result = await WishesService.toggleWish(userId, productId);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// 사용자별 찜 목록 조회
const getWishes = async (req, res) => {
	try {
		const userId = req.params.userId;
		const wishes = await WishesService.getWishesByUser(userId);
		res.status(200).json(wishes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = { toggleWish, getWishes };
