import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchWrap className="search_wrap">
        <SearchInputBox className="search_input_box">
          <SearchInput  className="search_input" type="text" placeholder="원하는 책을 검색하세요." />
          <SearchButton className="search_button" href="">
            <SearchIcon src="./search_icon.svg" alt="검색 버튼 아이콘" />
          </SearchButton>
        </SearchInputBox>
      </SearchWrap>
  )
}

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputBox = styled.div`
  width: 100%;
  height: 60px;
  border: 2px solid #000;
  border-radius: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 15px ;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  position: relative;
  padding: 5px;
  background: none;
`;
const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
const SearchIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
`;

export default SearchBar;