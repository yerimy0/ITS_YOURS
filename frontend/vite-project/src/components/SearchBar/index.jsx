import React, { useState } from 'react';
// import { CgSearch } from 'react-icons/cg';
import {
	SearchWrap,
	SearchInputBox,
	SearchInput,
	ClearButton,
	SearchButton,
} from './SearchBarStyle';
import { searchBooksByName } from '../../apis/service/product.api';

function SearchBar({ onSearchResults }) {
	const [placeholder, setPlaceholder] = useState('원하는 책을 검색하세요.');
	const [searchValue, setSearchValue] = useState('');
	const [isInputFocused, setIsInputFocused] = useState(false);

	const handleChange = e => {
		setSearchValue(e.target.value);
	};

	const handleFocus = () => {
		setIsInputFocused(true);
		setPlaceholder('');
	};

	const handleBlur = () => {
		setIsInputFocused(false);
		setPlaceholder('원하는 책을 검색하세요.');
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSearch();
		}
	};

	const handleSearch = async () => {
		try {
			const searchResults = await searchBooksByName(searchValue);
			onSearchResults(searchResults); // 검색 결과를 콜백 함수에 전달
			console.log('검색어:', searchValue);
			console.log('검색 결과:', searchResults);
		} catch (err) {
			console.error('검색 에러:', err);
		}
	};

	const handleClearInput = () => {
		setSearchValue('');
	};

	return (
		<SearchWrap>
			<SearchInputBox className="product_search_bar">
				<SearchInput
					type="text"
					onChange={handleChange}
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					value={searchValue}
					className="product"
				/>
				{searchValue && (
					<ClearButton onClick={handleClearInput}>
						X {/* 입력창에 텍스트가 있을 때만 보이는 버튼 */}
					</ClearButton>
				)}
				<SearchButton onClick={handleSearch}>
					<img src="/search_btn.png" alt="검색버튼" />
					{/* <CgSearch size="30" /> */}
				</SearchButton>
			</SearchInputBox>
		</SearchWrap>
	);
}

export default SearchBar;
