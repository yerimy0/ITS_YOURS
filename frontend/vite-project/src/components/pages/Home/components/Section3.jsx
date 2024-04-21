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

	return (
		<Box3 className="BlueBack">
			<div className="container">
				<Title className="sec3_title">
					<TitleName>같은 학교부터, 근처 지역까지 당신 가까이의 전공책</TitleName>
					<Slogan className="Sub">검색과 필터링 기능으로 손쉽고 빠르게 </Slogan>
				</Title>
				<SchoolBox>
					{schools.map((school, i) => (
						<Icon key={`List-school-${i}`} src={`./${school}`} alt={`${school}`} />
					))}
				</SchoolBox>
				<UpdateBooks>
					{books.map((book, i) => (
						<div key={i}>
							<Img className="sec3_img" src={`./${book.image}`} alt={`${book.name}`} />
							<BookInfo>{book.name}</BookInfo>
							<BookInfo>{book.price}</BookInfo>
						</div>
					))}
				</UpdateBooks>
				<ButtonBox>
					<Button
						className="sec3_button"
						onClick={() => {
							navigate('/product');
						}}
					>
						더보기
					</Button>
				</ButtonBox>
			</div>
		</Box3>
	);
}

export default Section3;
