import { NavLink } from 'react-router-dom';
import { RightNav, LeftNav, HeaderMain, Nav } from './HeaderSytle';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
	const [isAuth, setIsAuth] = useState(true);
	const [isToggled, setIsToggled] = useState(false);

	function handleClick() {
		setIsToggled(!isToggled);
	}
	return (
		<HeaderMain istoggled={isToggled}>
			<NavLink to="/">
				<img src="/main_logo.png" />
			</NavLink>
			<Nav>
				<RightNav istoggled={isToggled}>
					<li>
						<NavLink className="MainLink" to="/product">
							도서거래
						</NavLink>
					</li>
					<li>
						<NavLink to="/community">커뮤니티</NavLink>
					</li>
					<li>
						<NavLink to="/chat">채팅하기</NavLink>
					</li>
					<li>
						<NavLink to="/product/write">내책판매</NavLink>
					</li>
				</RightNav>
				<LeftNav istoggled={isToggled}>
					{isAuth ? (
						<>
							<li>
								<NavLink to="/mypage">너의페이지</NavLink>
							</li>
							<li>
								<a>로그아웃</a>
							</li>
						</>
					) : (
						<li>
							<NavLink to="/login">로그인</NavLink>
						</li>
					)}
					<img src="/light.png" />
				</LeftNav>
			</Nav>
			<div className="HambergerBtn" onClick={handleClick}>
				<RxHamburgerMenu />
			</div>
		</HeaderMain>
	);
}

export default Header;
