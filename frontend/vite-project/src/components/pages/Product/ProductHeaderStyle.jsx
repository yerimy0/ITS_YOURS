import styled from 'styled-components';

const ProductListHeader = styled.section`
	.text_wrap {
	}
	h4 {
		font-family: 'PyeongChangPeace-Bold';
		// font-family: 'DOSPilgiMedium';
		font-weight: 400;
		font-size: 100px;
		padding: 30px;
		white-space: pre-line;
	}

	span {
		display: inline-block;
	}
	.container {
		padding: 0;
		width: 90%;
	}

	.product_search_bar {
		width: 100% !important;
		margin-bottom: 20px;
	}
`;

const TextWrap = styled.div`
	box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 50px;
	border-bottom-right-radius: 50px;
	position: relative;
	display: inline-block;
	font-size: 35px;
	margin: 70px 0;

	.tw_wrap {
		margin: 80px 0 20px;
		text-align: center;
		animation: bounce 1s infinite;
	}

	h5 {
		font-size: 20px;
		line-height: 2px;
		font-weight: 700;
	}

	img {
		width: 20px;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(-40%);
		}
	}
`;
const ProductListTitle = styled.h1`
	text-align: left;
	font-size: 28px;
	font-weight: 400;
	padding-bottom: 10px;
	margin: 20px 0 5px 10px;
	color: #666;
`;

const SearchResultContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0 50px;
	font-size: 19px;
	color: #444;

	.find_num {
		color: #009dff !important;
		font-weight: 500;
	}
`;

const SearchResult = styled.p``;

const ProductFilterWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export {
	ProductListHeader,
	ProductListTitle,
	SearchResultContainer,
	SearchResult,
	ProductFilterWrap,
	TextWrap,
};
