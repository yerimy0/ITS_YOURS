import styled from 'styled-components';

const WishsWrap = styled.section`
	display: flex;
	max-width: 1200px;
	min-height: 400px;
	width: 100%;
	margin: 30px auto 0;
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
	font-weight: 400;
	line-height: 64px;
	text-align: center;
	margin: 0;

	@media (max-width: 1000px) {
		font-size: 46px;
	}
`;

const NoWishText = styled.h3`
	text-align: center;
	margin-top: 100px;
	font-size: 20px;
	font-weight: 400;
`;

const Wishs = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	gap: 5%;
	width: 100%;
	justify-content: flex-start;
	margin: 30px 0 30px 0;
	padding: 0 15px;
`;

export { WishsWrap, WishTitle, NoWishText, Wishs };
