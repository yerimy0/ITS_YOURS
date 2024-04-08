import {
	Box3,
	ButtonBox,
	Button,
	TitleName,
	Slogan,
	Title,
	Icon,
	SchoolBox,
	UpdateBooks,
	Img,
	BookInfo,
} from '../HomeStyle';
import { books } from './data'; // 데이터 파일을 가져올 때 변수명을 'bookData'로 변경

function Section3() {
	const schools = ['school1.png', 'school2.png', 'school3.png', 'school4.png', 'school5.png'];
	return (
		<Box3 className="BlueBack">
			<Title>
				<TitleName>같은 학교부터, 근처 지역까지 당신 가까이의 전공책</TitleName>
				<Slogan className="Sub">검색과 필터링 기능으로 손쉽고 빠르게 </Slogan>
			</Title>
			<SchoolBox>
				{schools.map((school, i) => (
					<Icon key={i} src={`/${school}`} alt={`${school}`} />
				))}
			</SchoolBox>
			<UpdateBooks>
				{books.map((book, i) => (
					<div key={i}>
						<Img src={`${book.image}`} alt={`${book.name}`} />
						<BookInfo>{book.name}</BookInfo>
						<BookInfo>{book.price}</BookInfo>
					</div>
				))}
			</UpdateBooks>
			<ButtonBox>
				<Button>더보기</Button>
			</ButtonBox>
		</Box3>
	);
}

export default Section3;
