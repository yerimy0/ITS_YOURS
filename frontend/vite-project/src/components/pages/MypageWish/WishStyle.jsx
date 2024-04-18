import styled from 'styled-components';

const WishsWrap = styled.section`
	display: flex;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
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

const NoWishText = styled.h3`
	text-align: center;
	margin: 0;
`;

const Wishs = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	gap: 5%;
	width: 100%;
	justify-content: flex-start;
	margin: 60px 0 30px 0;
	padding: 0 15px;
`;

export { WishsWrap, WishTitle, NoWishText, Wishs };
