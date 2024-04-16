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
import { schools } from './data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDefaultProducts } from '../../../../apis/service/product.api';

function Section3() {
	const navigate = useNavigate();
	const [recommendedProducts, setRecommendedProducts] = useState([]);

	// 학교별 도서 3권 불러오기
	async function perSchoolBook(e) {
		const product = e.target.alt;
		const res = await fetchDefaultProducts();

		const filteredProducts = res.filter(p => p.schoolName == product);
		setRecommendedProducts(filteredProducts.slice(0, 3));
	}

	// 책 이름 일정 글자수 이상이면 생략 부호 추가하기!
	function simpleTitle(text, maxLength) {
		if (text.length <= maxLength) {
			return text;
		} else {
			return text.slice(0, maxLength) + '...';
		}
	}

	return (
		<Box3 className="BlueBack">
			<div className="container">
				<Title className="sec3_title">
					<TitleName>같은 학교부터, 근처 지역까지 당신 가까이의 전공책</TitleName>
					<Slogan className="Sub">검색과 필터링 기능으로 손쉽고 빠르게 </Slogan>
				</Title>
				<SchoolBox onClick={perSchoolBook}>
					{schools.map((school, i) => (
						<Icon
							key={`List-school-${i}`}
							src={`./${school.pic}`}
							value={school.name}
							alt={`${school.name}`}
						/>
					))}
				</SchoolBox>
				<UpdateBooks>
					{recommendedProducts.map((book, i) => (
						<div
							key={`book-shools-${i}`}
							onClick={() => {
								navigate(`/product/${book._id}`);
								window.scrollTo(0, 0);
							}}
						>
							<Img className="sec3_img" src={`${book.imgUrls[0]}`} alt={`${book.name}`} />
							<BookInfo>{simpleTitle(book.name, 15)}</BookInfo>
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
