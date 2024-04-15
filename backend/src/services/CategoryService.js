const { Category } = require('../models/index');
// 카테고리 조회 API
async function getAllCategories() {
	const categories = await Category.find();

	return categories;
}

async function getRegionBySchoolName(schoolName) {
	const category = await Category.findOne({ 'universities.name': schoolName }).select('region');
	return category ? category.region : null;
}

async function getUniversityLocation(universityName) {
	try {
		const result = await Category.findOne(
			{ 'universities.name': universityName },
			{ 'universities.$': 1 },
		);
		if (result && result.universities.length > 0) {
			return result.universities[0];
		} else {
			return null;
		}
	} catch (error) {
		throw error;
	}
}
module.exports = { getAllCategories, getRegionBySchoolName, getUniversityLocation };
