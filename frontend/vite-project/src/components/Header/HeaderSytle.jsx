import styled from 'styled-components';
const HeaderMain = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 30px;
	background-color: ${props => (props.isMainPage ? '#b1e9f8' : ' #fff')};

	.ham_wrap {
		display: none;
	}

	// .ham_img {
	// 	display: none;
	// }

	.main_logo {
		display: block;
		width: 210px;
	}

	.ToggleBox {
		display: none;
	}

	.ham_background {
		display: none;
	}

	.no-scroll {
		overflow: hidden;
		height: 100%;
	}
	@media screen and (max-width: 864px) {
		padding: 15px 20px 15px 55px;

		.main_logo {
			width: 130px;
		}

		.ham_a {
			display: flex;
			align-items: center;
			gap: 20px;
		}

		.ham_wrap {
			display: block;
			position: absolute;
			left: 15px;
		}

		.ham_img {
			display: block;
			width: 38px;
		}

		.ToggleBox {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			background: #fff;
			width: 70%;
			height: 100vh;
			z-index: 999;
			padding: 20px;

			.li {
				font-size: 20px;
				padding: 20px 5px;

				.li_i {
					width: 30px;
				}
			}
		}

		.close_btn {
			position: absolute;
			width: 30px;
			right: 20px;

			img {
				width: 100%;
			}
		}

		.img_wrap {
			display: flex;
			align-items: center;
			width: 100%;
			margin: 50px 0 30px;

			.img1 {
				width: 60px;
			}
			.img2 {
				width: 130px;
			}
		}

		h2 {
			font-size: 22px;
			font-weight: 500;
			margin-bottom: 100px;

			span {
				color: #009dff;
				font-weight: 700;
			}
		}

		.ham_background {
			position: fixed; /* 또는 absolute, 화면 전체를 커버하도록 조정 */
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100vh;
			z-index: 998;
			background-color: rgba(0, 0, 0, 0.5); /* 불투명한 검정색 */
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

const NavWrap = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	gap: 30px;

	@media screen and (max-width: 864px) {
		width: auto;
	}
`;
const MainLogo = styled.div``;

const RightNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 5%;
	width: 70%;

	@media screen and (max-width: 864px) {
		width: auto;
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
`;

const Nav = styled(HeaderMain)`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
	padding: 0;
	background: transparent;

	img {
		width: 60px;
	}

	@media screen and (max-width: 864px) {
		width: 45%;
	}
`;

export { RightNav, LeftNav, HeaderMain, Nav, MainLogo, NavWrap };
