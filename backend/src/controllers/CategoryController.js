const categoryService = require('../services/CategoryService');

// 카테고리 조회 API
const getAllCategories = async (req, res, next) => {
	try {
		const categories = await categoryService.getAllCategories();
		if (!categories) {
			throw new Error('조회되는 카테고리가 없습니다!');
		}
		res.status(200).json({ data: categories, message: '카테고리 조회 성공' });
	} catch (err) {
		next(err);
	}
};

module.exports = { getAllCategories };
