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
		schoolName: selectedCategory.universities[randomIndex2].name,
		latitude: selectedCategory.universities[randomIndex2].latitude, // 대학 정문의 위도 반환
		longitude: selectedCategory.universities[randomIndex2].longitude, // 대학 정문의 경도 반환
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
		const conditions = ['새상품', '거의 새것', '중고'];
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
				const { region, schoolName, latitude, longitude } = await getRandomUniversity();

				return {
					name: item.title,
					author: item.author,
					price: item.priceStandard,
					imgUrls: item.cover,
					publisher: item.publisher,
					sellerId,
					region,
					schoolName,
					latitude, // 대학 정문의 위도 추가
					longitude, // 대학 정문의 경도 추가
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
		const seoulApiUrl = `http://openapi.seoul.go.kr:8088/${process.env.KEY}/json/SebcCollegeInfoKor/1/100/`;
		const { data: seoulData } = await axios.get(seoulApiUrl);

		const resData = seoulData.SebcCollegeInfoKor.row;
		const filteredData = resData.filter(
			row => row.CATE1_NAME === '일반대학' && row.STATE !== '폐교',
		);

		for (const uni of filteredData) {
			const kakaoApiUrl = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(
				uni.NAME_KOR,
			)}`;
			const { data: kakaoData } = await axios.get(kakaoApiUrl, {
				headers: {
					Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
				},
			});
			if (kakaoData.documents.length > 0) {
				const { x: longitude, y: latitude } = kakaoData.documents[0]; // 첫 번째 검색 결과 사용
				const region = uni.H_KOR_GU;
				const university = {
					name: uni.NAME_KOR,
					latitude: parseFloat(latitude),
					longitude: parseFloat(longitude),
				};

				let category = await Category.findOne({ region: region });

				if (category) {
					category.universities.push(university);
					await category.save();
				} else {
					category = new Category({ region, universities: [university] });
					await category.save();
				}
			}
		}

		res.status(200).json({ message: '카테고리 추가 성공' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('서버 에러');
	}
};

module.exports = { insertProductsData, insertCategoryData };
