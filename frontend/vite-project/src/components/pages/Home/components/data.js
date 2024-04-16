// 백엔드 받아오기 전, 책 이미지 + 제목 + 가격 정보

const books = [
	{
		id: 0,
		image: 'book1.png',
		name: '멘큐의 경제학',
		price: 10000,
	},
	{
		id: 1,
		image: 'book2.png',
		name: '산업경영공학',
		price: 15000,
	},
	{
		id: 2,
		image: 'book4.png',
		name: '점프투 파이썬',
		price: 20000,
	},
];

const pics = ['book1.png', 'book2.png', 'book3.png', 'book4.png', 'book5.png'];

const schools = [
	{ pic: 'school1.png', name: '서울시립대학교' },
	{ pic: 'school2.png', name: '중앙대학교' },
	{ pic: 'school3.png', name: '고려대학교' },
	{ pic: 'school4.png', name: '건국대학교' },
	{ pic: 'school5.png', name: '경희대학교' },
];

const infos = [
	{
		image: 'sub_map.png',
		content: '서울 어디든 지역구',
		num: 19,
		end: '구',
	},
	{
		image: 'sub_book.png',
		content: '함께하는 학교',
		num: 52,
		end: '학교',
	},
	{
		image: 'sub_users.png',
		content: '이제너해 유저수',
		num: 150,
		end: '명',
	},
	{
		image: 'sub_dev.png',
		content: 'By Elice 개발자',
		num: 7,
		end: '명',
	},
];

export { books, infos, pics, schools };
