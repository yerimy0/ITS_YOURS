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
	justify-content: space-between;
	width: 70%;
	margin: 0 auto;
	position: relative;
	border: 1px solid #ddd;
	padding: 15px 20px;

	border-radius: 20px !important;

	@media screen and (max-width: 864px) {
		width: 100%;
	}
`;

const SearchInput = styled.input`
	display: block;
	width: 90%;
	text-align: start;
	font-size: 20px;

	@media screen and (max-width: 864px) {
		font-size: 18px;
	}
`;
const ClearButton = styled.button`
	color: #ded8e1;
	font-size: 24px;
	width: 10%;
`;

const SearchButton = styled.button`
	img {
		width: 25px;
		height: 25px;
	}
`;

export { SearchWrap, SearchInputBox, SearchInput, ClearButton, SearchButton };
