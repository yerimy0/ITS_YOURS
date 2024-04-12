import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import {
	SearchWrap,
	SearchInputBox,
	SearchInput,
	ClearButton,
	SearchButton,
} from './SearchBarStyle';
import instance from '../../apis/axiosInstance';

function SearchBar({ onSearchResults }) {
	const [placeholder, setPlaceholder] = useState('원하는 책을 검색하세요.');
	const [searchValue, setSearchValue] = useState('');
	const [isInputFocused, setIsInputFocused] = useState(false);

	// 입력값 변경 핸들러
	const handleChange = e => {
		setSearchValue(e.target.value);
	};

	// 입력창 포커스 관리 핸들러
	const handleFocus = () => {
		setIsInputFocused(true);
		setPlaceholder('');
	};

	// 입력창 포커스 아웃 관리 핸들러
	const handleBlur = () => {
		setIsInputFocused(false);
		setPlaceholder('원하는 책을 검색하세요.');
	};

	// 엔터 키 다운 핸들러
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			searchBooks();
		}
	};

	// 검색 버튼 클릭 핸들러
	const handleSearch = () => {
		searchBooks();
	};

	// 입력값 지우기 버튼 클릭 핸들러
	const handleClearInput = () => {
		setSearchValue('');
	};

	// 검색 함수
	const searchBooks = async () => {
		try {
			const res = await instance.get(`/api/products/search?name=${searchValue}`);
			onSearchResults(res.data.data); // 검색 결과를 콜백 함수에 전달
			console.log('검색어:', searchValue);
			console.log('검색 결과:', res.data);
		} catch (err) {
			console.error('검색 에러:', err);
		}
	};

	return (
		<SearchWrap>
			<SearchInputBox>
				<SearchInput
					type="text"
					onChange={handleChange}
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					value={searchValue}
				/>
				{searchValue && (
					<ClearButton onClick={handleClearInput}>
						X {/* 입력창에 텍스트가 있을 때만 보이는 버튼 */}
					</ClearButton>
				)}
				<SearchButton onClick={handleSearch}>
					<CgSearch size="30" />
				</SearchButton>
			</SearchInputBox>
		</SearchWrap>
	);
}

export default SearchBar;
