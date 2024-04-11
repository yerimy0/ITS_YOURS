import styled from 'styled-components';

const Loading = styled.div`
	font-size: 24px;
	line-height: 28px;
	margin: 0;
`;
const ProductsWrap = styled.section`
	display: flex;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
`;

const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	gap: 50px;
	justify-content: space-evenly;
	margin: 60px 0 30px 0;
`;

export { Loading, ProductsWrap, Products };
