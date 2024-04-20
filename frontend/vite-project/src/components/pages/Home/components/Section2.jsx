import React, { useState, useEffect } from 'react';
import { Box2, UpdateBooks, UpdateTitle, Button, ButtonBox, Img } from '../HomeStyle';
import SearchBar from '../../../../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { fetchDefaultProducts } from '../../../../apis/service/product.api';

function Section2() {
	const navigate = useNavigate();
	const [searchResults, setSearchResults] = useState([]);
	const [sortedBooks, setSortedBooks] = useState([]);

	// 검색 결과 처리
	const handleSearchResults = results => {
		navigate('/product', { state: { searchResults: results } });
	};

	// 최신 도서 6권 가져오기
	useEffect(() => {
		async function newUpdatedBooks() {
			try {
				const products = await fetchDefaultProducts();
				const sorted = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
				const latestProducts = sorted.slice(0, 5);
				setSortedBooks(latestProducts);
			} catch (error) {
				console.error('최신상품 데이터를 가져오는 과정에서 오류가 발생했습니다.');
			}
		}
		newUpdatedBooks();
	}, []);

	function OnClick() {
		navigate('/product');
	}
	return (
		<Box2>
			<div className="container">
				<SearchBar onSearchResults={handleSearchResults} />
				<div className="UpdateSection">
					<UpdateTitle>방금 올라온 도서</UpdateTitle>
					<UpdateBooks>
						{sortedBooks.map((book, i) => (
							<Img
								className="sec2_img"
								key={`List-item-${i}`}
								// src={`${book.imgUrls}`}
								//이미지api 정보에는 imgurl에 중간에 coversum 이라고들어가는데 cover라고 바꾸면 사진이 깨끗해짐,
								// 하지만 api 어떤걸로 불러와야하는지몰라서 imgurl자체를 coversum단어를 cover로 대체해서 넣어버림
								src={`${book.imgUrls.map(url => url.replace('coversum', 'cover500'))}`}
								alt={`Book ${i}`}
								onClick={() => {
									navigate(`/product/${book._id}`);
									window.scrollTo(0, 0);
								}}
							/>
						))}
					</UpdateBooks>
					<ButtonBox>
						<Button onClick={OnClick}>더보기</Button>
					</ButtonBox>
				</div>
			</div>
		</Box2>
	);
}

export default Section2;
