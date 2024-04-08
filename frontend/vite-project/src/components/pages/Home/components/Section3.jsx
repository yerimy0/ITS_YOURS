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
import { books } from './data';
import { schools } from './data';
import { useNavigate } from 'react-router-dom';

function Section3() {
	const navigate = useNavigate();

	function OnClick() {
		navigate('/product');
	}
	return (
		<Box3 className="BlueBack">
			<Title>
				<TitleName>같은 학교부터, 근처 지역까지 당신 가까이의 전공책</TitleName>
				<Slogan className="Sub">검색과 필터링 기능으로 손쉽고 빠르게 </Slogan>
			</Title>
			<SchoolBox>
				{schools.map((school, i) => (
					<Icon key={i} src={`./${school}`} alt={`${school}`} />
				))}
			</SchoolBox>
			<UpdateBooks>
				{books.map((book, i) => (
					<div key={i}>
						<Img src={`./${book.image}`} alt={`${book.name}`} />
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
