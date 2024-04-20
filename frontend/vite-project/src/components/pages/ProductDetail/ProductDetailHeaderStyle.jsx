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
	@media (max-width: 1000px) {
		padding: 0 15px;
	}
`;

const BookCover = styled.div`
	display: flex;
	max-width: 600px;
	max-height: 600px;
	align-items: flex-start;
	gap: 8px;
	box-shadow: 0 2px 8px #777;
	img {
		width: 100%;
		object-fit: cover;
	}
`;

const ProductContent = styled.div`
	width: 450px;
	height: 450px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1000px) {
		width: 100%;
		/* padding: 0 15px; */
		height: auto;
	}
`;

const SalesInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 15px;
	margin-right: auto;
	padding-bottom: 30px;
	border-bottom: 1px solid #ddd;
`;

const BookContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: normal;
	justify-content: space-between;
	@media (max-width: 1000px) {
		justify-content: normal;
	}
`;

const ChatButton = styled.button`
	display: flex;
	width: 50%;
	height: auto;
	padding: 15px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #fff;
	color: #009dff;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 100%;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
	width: 100%;
	cursor: pointer;
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&:hover {
		background: #009dff;
		color: #fff;
	}
	@media (max-width: 1000px) {
		font-size: 16px;
		line-height: 100%;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
	}
`;

const ProductInfoTextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

const Title = styled.p`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-style: normal;
	font-weight: 600;
	line-height: 36px;
	margin: 10px 0;
	@media (max-width: 1000px) {
		font-size: 18px;
	}
`;

const ProductInfoText = styled.div`
	display: flex;
	align-items: flex-start;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	margin: 0;
	@media (max-width: 1000px) {
		font-weight: 400;
	}
`;

export {
	ProductDetail,
	BookCover,
	ProductContent,
	SalesInfo,
	BookContainer,
	ChatButton,
	ProductInfoTextWrap,
	Title,
	ProductInfoText,
};
