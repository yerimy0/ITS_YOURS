import styled from 'styled-components';

const ProductInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Title = styled.p`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-style: normal;
	font-weight: 700;
	line-height: 36px;
	margin: 0;
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
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	margin: 0;
`;
const PriceWon = styled.p`
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	margin: 0;
`;

export { ProductInfo, Title, PriceContainer, Div, Price, PriceWon };
