import styled from 'styled-components';

const ProductInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Title = styled.p`
	width: 98%;
	display: flex;
	align-items: center;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	line-height: 36px;
	margin: 10px 0 40px 0;
	@media (max-width: 1000px) {
		font-size: 18px;
		margin: 10px 0 0px 0;
	}
`;
const PriceContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 5px;
`;

const Price = styled.p`
	font-size: 26px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	margin: 0;

	@media (max-width: 1000px) {
		font-size: 16px;
	}
`;
const PriceWon = styled.p`
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 40px;
	margin: 0;

	@media (max-width: 1000px) {
		font-size: 16px;
	}
`;

export { ProductInfo, Title, PriceContainer, Div, Price, PriceWon };
