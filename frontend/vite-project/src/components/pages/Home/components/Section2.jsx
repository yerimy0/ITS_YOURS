import React, { useState } from 'react';
import { Box2, UpdateBooks, UpdateTitle, Button, ButtonBox, Img } from '../HomeStyle';
import SearchBar from '../../../../components/SearchBar';
import { pics } from './data';
import { useNavigate } from 'react-router-dom';

function Section2() {
	const navigate = useNavigate();
	const [searchResults, setSearchResults] = useState([]);

	// 검색 결과 처리
	const handleSearchResults = results => {
		// 검색 결과가 변경되면 상품 목록 페이지로 이동하면서 상태를 전달
		navigate('/product', { state: { searchResults: results } });
	};

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
						{pics.map((pic, i) => (
							<Img className="sec2_img" key={`List-item-${i}`} src={`./${pic}`} alt={`Book ${i}`} />
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
