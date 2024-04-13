const { Category, Members, Products } = require('../models/index');
const axios = require('axios');

async function getRandomId() {
	const members = await Members.find({ deletedAt: { $exists: false } }).select('id');
	const randomIndex = Math.floor(Math.random() * members.length);
	return members[randomIndex].id;
}

async function getRandomUniversity() {
	const categories = await Category.find();
	const randomIndex1 = Math.floor(Math.random() * categories.length);
	const selectedCategory = categories[randomIndex1];
	const randomIndex2 = Math.floor(Math.random() * selectedCategory.universities.length);
	return {
		region: selectedCategory.region,
		schoolName: selectedCategory.universities[randomIndex2],
	};
}

//상품 데이터 추가
const insertProductsData = async (req, res) => {
	try {
		const response = await axios.get(
			`https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.TTBKey}&QueryType=ItemNewAll&MaxResults=60&start=1&SearchTarget=Book&CategoryId=8257&output=js&Version=20131101`,
		);
		const data = response.data.item;

		// condition과 description 예시 배열
		const conditions = ['새 책', '좋음', '보통', '낡음'];
		const descriptions = [
			'이 책은 거의 새 책과 같은 상태입니다.',
			'책에 약간의 사용 흔적이 있습니다.',
			'책이 약간 낡았으나 내용을 이해하는데 문제 없습니다.',
			'책이 많이 낡았으나 모든 페이지가 있습니다.',
		];

		// 모든 항목에 대해 비동기 작업을 수행
		const newData = await Promise.all(
			data.map(async item => {
				const sellerId = await getRandomId();
				const { region, schoolName } = await getRandomUniversity();

				return {
					name: item.title,
					author: item.author,
					price: item.priceStandard,
					imgUrls: item.cover,
					publisher: item.publisher,
					sellerId,
					region,
					schoolName,
					condition: conditions[Math.floor(Math.random() * conditions.length)],
					description: descriptions[Math.floor(Math.random() * descriptions.length)],
				};
			}),
		);

		await Products.insertMany(newData);
		res.status(200).send('데이터 추가 성공');
	} catch (error) {
		console.error(error);
		res.status(500).send('SERVER ERROR');
	}
};

//카테고리 데이터 추가
const insertCategoryData = async (req, res) => {
	try {
		const url = `http://openapi.seoul.go.kr:8088/${process.env.KEY}/json/SebcCollegeInfoKor/1/100/`;
		const { data } = await axios.get(url);

		const resData = data.SebcCollegeInfoKor.row;
		// 조건에 맞는 데이터만 필터링합니다.
		const filteredData = resData.filter(
			row => row.CATE1_NAME === '일반대학' && row.STATE !== '폐교',
		);
		// 각 지역구별로 대학 이름들을 묶습니다.
		const regionsWithUnis = filteredData.reduce((acc, curr) => {
			(acc[curr.H_KOR_GU] = acc[curr.H_KOR_GU] || []).push(curr.NAME_KOR);
			return acc;
		}, {});

		// 데이터베이스에 저장
		for (const [region, universities] of Object.entries(regionsWithUnis)) {
			let category = await Category.findOne({ region: region });

			if (category) {
				// 이미 존재하는 지역구라면, 대학 이름들을 업데이트합니다.
				category.universities = [...new Set([...category.universities, ...universities])]; // 중복 제거
				await category.save();
			} else {
				// 새로운 지역구라면, 새로운 문서를 생성합니다.
				category = new Category({ region, universities });
				await category.save();
			}
		}
		res.status(200).json({ data: regionsWithUnis, message: '카테고리 추가 성공' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('서버 에러');
	}
};

module.exports = { insertProductsData, insertCategoryData };
