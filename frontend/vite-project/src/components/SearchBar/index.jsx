import React from 'react';
import { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import {
	SearchWrap,
	SearchInputBox,
	SearchInput,
	ClearButton,
	SearchButton,
} from './SearchBarStyle';

function SearchBar() {
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

	// 검색 함수
	const searchBooks = () => {
		console.log('검색어:', searchValue);
		// 여기에 검색 로직 구현
	};

	// 입력값 지우기 버튼 클릭 핸들러
	const handleClearInput = () => {
		setSearchValue('');
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
