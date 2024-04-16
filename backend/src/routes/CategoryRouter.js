const { Router } = require('express');

const {
	getAllCategories,
	getRegionBySchoolName,
	getUniversityLocation,
} = require('../controllers/CategoryController');

const router = Router();
// 전체 카테고리 정보 조회
router.get('/', getAllCategories);
//학교이름 -> 지역 정보 조회
router.get('/:schoolName', getRegionBySchoolName);
//학교이름 -> 위도/경도 반환
router.get('/location/:schooName', getUniversityLocation);

module.exports = router;
