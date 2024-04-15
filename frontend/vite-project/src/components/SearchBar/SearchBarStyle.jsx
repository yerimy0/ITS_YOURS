import styled from 'styled-components';

const SearchWrap = styled.div`
	// max-width: 1200px;
	// width: 100%;
	// display: flex;
	// justify-content: center;
	// align-items: center;
	width: 100%
	display: flex;

`;

const SearchInputBox = styled.div`
	display: flex;
	align-items: center;
	width: 70%;
	margin: 0 auto;
	position: relative;
	border: 1px solid #ddd;
	padding: 15px 20px;

	border-radius: 20px !important;
`;

const SearchInput = styled.input`
	display: block;
	width: 90%;
	text-align: start;
	font-size: 20px;
`;
const ClearButton = styled.button`
	color: #ded8e1;
	font-size: 24px;
	width: 10%;
`;

const SearchButton = styled.button`
	display: block;
	background: transparent;
	border: 0;
	position: absolute;
	top: 52%;
	right: 15px;
	transform: translateY(-50%);
`;

export { SearchWrap, SearchInputBox, SearchInput, ClearButton, SearchButton };
