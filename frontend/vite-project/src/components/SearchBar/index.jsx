import React from 'react';
import { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import {SearchWrap, SearchInputBox, SearchInput, SearchButton} from './SearchBarStyle';

function SearchBar() {
  const [placeholder, setPlaceholder] = useState('원하는 책을 검색하세요.');
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('원하는 책을 검색하세요.');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchBooks();
    }
  };

  const handleSearch = () => {
    searchBooks();
  }

  const searchBooks = () => {
    setSearch(''); 
  }


  return (
    <SearchWrap>
        <SearchInputBox>
          <SearchInput
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            value={search}
          />
          <SearchButton onClick={handleSearch}>
            <CgSearch size="30" />
          </SearchButton>
        </SearchInputBox>
      </SearchWrap>
  )
}

export default SearchBar;