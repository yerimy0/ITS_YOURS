const { NotFoundError } = require('../config/customError');
const categoryService = require('../services/CategoryService');

// 카테고리 조회 API
const getAllCategories = async (req, res, next) => {
	try {
		const categories = await categoryService.getAllCategories();
		if (!categories) {
			throw new NotFoundError('조회되는 카테고리가 없습니다!');
		}
		res.status(200).json({ data: categories, message: '카테고리 조회 성공' });
	} catch (err) {
		next(err);
	}
};

//학교명 > 지역 가져오기
const getRegionBySchoolName = async (req, res, next) => {
	try {
		const { schoolName } = req.params;
		const region = await categoryService.getRegionBySchoolName(schoolName);

		if (!region) {
			throw new NotFoundError('검색하신 학교 정보가 존재하지 않습니다.');
		}

		res.status(200).json({ data: region, message: '검색 성공!' });
	} catch (err) {
		next(err);
	}
};

//대학명 > 위도-경도 가져오기
const getUniversityLocation = async (req, res, next) => {
	try {
		const { schoolName } = req.params; // URL 파라미터에서 학교 이름을 받습니다.
		const location = await CategoryService.findUniversityLocation(schoolName);

		if (!location) {
			throw new NotFoundError('검색하신 학교 정보가 존재하지 않습니다.');
		}

		res.status(200).json({ data: location, message: '검색 성공!' });
	} catch (err) {
		next(err);
	}
};

module.exports = { getAllCategories, getRegionBySchoolName, getUniversityLocation };
