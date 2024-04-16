import React, { useState, useEffect } from 'react';
import { Box2, UpdateBooks, UpdateTitle, Button, ButtonBox, Img } from '../HomeStyle';
import SearchBar from '../../../../components/SearchBar';
import { pics } from './data';
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
								src={`${book.imgUrls}`}
								alt={`Book ${i}`}
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
