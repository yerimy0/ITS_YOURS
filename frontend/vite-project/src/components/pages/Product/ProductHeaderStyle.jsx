import styled from 'styled-components';

const ProductListHeader = styled.section`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;

const ProductListTitle = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	font-size: 57px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	text-align: center;
	margin: 0;
`;

const SearchResultContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
`;

const SearchResult = styled.p`
	font-size: 24px;
	line-height: 28px;
	margin: 0;
`;

const ProductFilterWrap = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export {
	ProductListHeader,
	ProductListTitle,
	SearchResultContainer,
	SearchResult,
	ProductFilterWrap,
};
