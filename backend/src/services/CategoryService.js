const { Category } = require('../models/index');
// 카테고리 조회 API
async function getAllCategories() {
	const categories = await Category.find();

	return categories;
}

module.exports = { getAllCategories };
