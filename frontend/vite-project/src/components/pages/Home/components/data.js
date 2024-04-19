// 백엔드 받아오기 전, 책 이미지 + 제목 + 가격 정보

const schools = [
	{ pic: 'school1.png', name: '서울시립대학교' },
	{ pic: 'school2.png', name: '중앙대학교 서울캠퍼스' },
	{ pic: 'school3.png', name: '고려대학교' },
	{ pic: 'school4.png', name: '건국대학교' },
	{ pic: 'school5.png', name: '경희대학교' },
];

const infos = [
	{
		image: 'sub_map.png',
		content: '서울 어디든 지역구',
		num: 18,
		end: '구',
	},
	{
		image: 'sub_book.png',
		content: '함께하는 학교',
		num: 42,
		end: '학교',
	},
	// {
	// 	image: 'sub_users.png',
	// 	content: '거래중인 도서수',
	// 	num: 152,
	// 	end: '권',
	// },
	{
		image: 'sub_dev.png',
		content: 'By Elice 개발자',
		num: 7,
		end: '명',
	},
];

export { infos, schools };
