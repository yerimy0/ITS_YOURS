import styled from 'styled-components';

const SearchWrap = styled.div`
	max-width: 1200px;
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
	padding: 0 15px;
`;

const SearchInput = styled.input`
	width: 100%;
	border: none;
	font-size: 28px;
	line-height: 36px;
	font-weight: 400;
	position: relative;
	padding: 5px;
	background: none;
	&:focus {
		outline: none;
	}
`;
const ClearButton = styled.button`
	cursor: pointer;
	border: none;
	background: none;
	cursor: pointer;
	color: #ded8e1;
	font-size: 24px;
	line-height: 32px;
	font-weight: 400;
	position: relative;
	padding: 5px;
`;

const SearchButton = styled.button`
	cursor: pointer;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
`;

export { SearchWrap, SearchInputBox, SearchInput, ClearButton, SearchButton };
