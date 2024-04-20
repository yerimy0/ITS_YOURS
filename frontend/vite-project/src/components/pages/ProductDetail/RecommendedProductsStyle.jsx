import styled from 'styled-components';

const RecommendedProducts = styled.div`
	margin-top: 10px;
	border-top: 1px solid #ddd;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	gap: 20px;
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
		margin: 0;
	}
`;

const ProductContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	row-gap: 213px;
	flex-wrap: wrap;
	@media (max-width: 1000px) {
		row-gap: 35px;
	}
`;

export { RecommendedProducts, Title, ProductContainer };
