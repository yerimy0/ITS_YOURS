import styled from 'styled-components';
const HeaderMain = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	flex: 1 0 0;
	padding-top: 20px;
	width: 100%;
	list-style: none;
	.HambergerBtn {
		display: none;
		font-size: 40px;
	}

	@media screen and (max-width: 1080px) {
		flex-direction: column;

		.HambergerBtn {
			display: block;
		}
	}

	a {
		text-decoration: none;
		color: #000;
		text-align: center;
		font-family: SUIT;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-right: 25px;
	}
`;

const RightNav = styled.div`
	display: flex;
	width: 837px;
	height: 55px;
	align-items: center;
	gap: 30px;
	.MainLink {
		font-weight: 900;
	}
    a {
		font-size: 25px;

    @media screen and (max-width: 1080px) {
        width: 100%;
		li {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;

const LeftNav = styled.div`
	display: flex;
	height: 55px;
	padding: 0px 20px;
	justify-content: flex-end;
	align-items: flex-start;
	gap: 20px;
	flex-wrap: wrap;

	a {
		font-size: 15px;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 1080px) {
		width: 100%;
		li {
			display: flex;
			flex-direction: column;
			width: 100%;
			align-items: center;
		}
	}
`;

const Nav = styled(HeaderMain)`
	align-items: flex-start;
	@media screen and (max-width: 1080px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
`;

export { RightNav, LeftNav, HeaderMain, Nav };
