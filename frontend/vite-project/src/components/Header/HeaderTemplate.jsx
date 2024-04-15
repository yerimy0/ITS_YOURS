import { NavLink } from 'react-router-dom';
import { RightNav, LeftNav, HeaderMain, Nav, NavWrap } from './HeaderSytle';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';

function Header() {
	const [isAuth, setIsAuth] = useState(false);
	const [isToggled, setIsToggled] = useState(false);

	function handleClick() {
		setIsToggled(!isToggled);
	}

	const location = useLocation();
	const isMainPage = location.pathname === '/';

	return (
		<HeaderMain istoggled={isToggled} isMainPage={isMainPage}>
			{/* RIGHT 부분을 NavWrap안에 감싸서 다시 넣어놨어요! */}
			<NavWrap>
				<NavLink to="/">
					<img src="/main_logo.png" />
				</NavLink>
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
			</NavWrap>
			<Nav>
				<LeftNav istoggled={isToggled} isMainPage={isMainPage}>
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
