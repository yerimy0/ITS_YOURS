import styled from 'styled-components';
const HeaderMain = styled.div`
	.HambergerBtn {
		display: none;
	}

	@media screen and (max-width: 864px) {
		.HambergerBtn {
			display: block;
			position: absolute;
		}
	}

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
	background-color: ${props => (props.isMainPage ? '#b1e9f8' : ' #fff')};
`;

const NavWrap = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	gap: 30px;
`;
const MainLogo = styled.div``;

// 햄버거 버튼 숨기고 일단 right nav 숨기는데 여기부분 필요할것같아요!
const RightNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 5%;
	width: 70%;

	@media screen and (max-width: 864px) {
		display: none;
	}

	li {
		font-size: 20px;
		font-weight: 500;
	}
`;

const LeftNav = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	width: 100%;
	justify-content: flex-end;

	img {
		width: 65px;
	}
`;

const Nav = styled(HeaderMain)`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
	padding: 0;
	background: transparent;
`;

export { RightNav, LeftNav, HeaderMain, Nav, MainLogo, NavWrap };
