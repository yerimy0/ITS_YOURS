import styled from 'styled-components';

const WishWrap = styled.section`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;
const WishTitle = styled.h1`
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

const WishFilterWrap = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export { WishWrap, WishTitle, WishFilterWrap };
