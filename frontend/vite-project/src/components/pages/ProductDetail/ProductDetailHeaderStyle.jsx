import styled from 'styled-components';

const ProductDetail = styled.section`
	max-width: 1200px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px 0 35px 0;
	gap: 55px;
	flex-wrap: wrap;
	justify-content: center;
	border-bottom: 2px solid #000;
`;

const BookCover = styled.div`
	display: flex;
	max-width: 600px;
	max-height: 600px;
	align-items: flex-start;
	gap: 8px;
`;

const BookImg = styled.img`
	width: 450px;
	height: 450px;
	max-width: 450px;
	max-height: 450px;
`;

const ProductContent = styled.div`
	width: 450px;
	height: 450px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SalesInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 15px;
	margin-right: auto;
	padding-bottom: 10px;
	border-bottom: 1px solid #000;
`;

const BookContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ChatButton = styled.button`
	display: flex;
	width: 100%;
	height: auto;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #009dff;
	color: #fff;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export { ProductDetail, BookCover, BookImg, ProductContent, SalesInfo, BookContainer, ChatButton };
