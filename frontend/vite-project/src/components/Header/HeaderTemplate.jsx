import { NavLink } from 'react-router-dom';
import { RightNav, LeftNav, HeaderMain, Nav, NavWrap } from './HeaderSytle';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserIdContext from '../../context/UserIdContext';
import { logout } from '../../apis/service/LoginApi';

// ================= 토글박스 뜨면 스크롤 안되도록 막기
// ================= 토글박스안에 메인로고 이미지 클릭하면 홈으로 이동할수있도록 link 컴포넌트 사용!
// ================= 토글박스안에 커뮤니티 아이콘만 좀 어색해보여서 변경하면 더 좋을듯해요!
function Header() {
	const [isAuth, setIsAuth] = useState(false);
	const [isToggled, setIsToggled] = useState(false);
	const { id } = useContext(UserIdContext);

	useEffect(() => {
		console.log(id);
		if (id == '') setIsAuth(false);
		else setIsAuth(true);
	}, []);

	function handleClick() {
		setIsToggled(!isToggled);
	}

	// 박스 바깥 영역 클릭시 토글 상태 변경
	function handleOutsideClick(e) {
		if (isToggled && e.target.className === 'ham_background') {
			setIsToggled(false);
		}
	}

	// 닫기 버튼 클릭시 토글 상태 변경
	function handleCloseClick() {
		setIsToggled(false);
	}

	// 로그아웃
	async function handleLogout() {
		await logout();
		window.location.reload();
	}

	const location = useLocation();
	const isMainPage = location.pathname === '/';

	return (
		<HeaderMain className="header_main" istoggled={isToggled} isMainPage={isMainPage}>
			{/* RIGHT 부분을 NavWrap안에 감싸서 다시 넣어놨어요! */}
			<NavWrap>
				<NavLink to="/">
					<img className="main_logo" src="/main_logo.png" />
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
								<NavLink to="/mypage" style={{ fontSize: '16px', marginRight: '10px' }}>
									너의페이지
								</NavLink>
							</li>
							<li>
								<a onClick={handleLogout} style={{ fontSize: '16px', marginRight: '10px' }}>
									로그아웃
								</a>
							</li>
						</>
					) : (
						<li>
							<NavLink to="/login" style={{ fontSize: '16px', marginRight: '10px' }}>
								로그인
							</NavLink>
						</li>
					)}
				</LeftNav>
				<img src="/light.png" />
				<div className="ham_wrap">
					<img src="/ham_btn.png" className="ham_img " alt="햄버거 버튼" onClick={handleClick} />
					{/* <RxHamburgerMenu className="" onClick={handleClick} /> */}
				</div>
			</Nav>
			{isToggled && <div className="ham_background" onClick={handleOutsideClick}></div>}
			{isToggled && (
				<div className="ToggleBox">
					<button className="close_btn" onClick={handleCloseClick}>
						<img src="/close_btn.png" alt="" />
					</button>
					<div className="img_wrap">
						<NavLink to="/">
							<img className="img1" src="/logoCharacter.png" alt="" />
							<img className="img2" src="/main_logo.png" alt="" />
						</NavLink>
					</div>
					<h2 style={{ marginBottom: '5px' }}>
						즐거운 쇼핑생활! <br />
						<span>이제너해</span>가 함께 합니다!
					</h2>

					<div className="li" onClick={isToggled}>
						<NavLink to="/product" className="ham_a">
							<img src="/i1.png" className="li_i" alt="" />
							도서거래
						</NavLink>
					</div>
					<div className="li" onClick={isToggled}>
						<NavLink to="/community" className="ham_a">
							<img src="/i2.png" className="li_i" alt="" />
							커뮤니티
						</NavLink>
					</div>
					<div className="li" onClick={isToggled}>
						<NavLink to="/chat" className="ham_a">
							<img src="/i3.png" className="li_i" alt="" />
							채팅하기
						</NavLink>
					</div>
					<div className="li" onClick={isToggled}>
						<NavLink to="/product/write" className="ham_a">
							<img src="/i4.png" className="li_i" alt="" />
							내책판매
						</NavLink>
					</div>
					{isAuth ? (
						<>
							<div
								style={{
									fontSize: '16px',
									padding: '5px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'normal',
									gap: '10px',
									marginTop: '100px',
									color: '#666',
								}}
							>
								<NavLink to="/mypage" className="ham_a" onClick={isToggled}>
									너의페이지
								</NavLink>
								|
								<NavLink to="/product" className="ham_a" onClick={isToggled}>
									<a onClick={handleLogout}>로그아웃</a>
								</NavLink>
							</div>
						</>
					) : (
						<div
							style={{
								fontSize: '16px',
								padding: '5px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'normal',
								gap: '10px',
								marginTop: '100px',
								color: '#666',
							}}
						>
							<NavLink to="/login">로그인</NavLink>
						</div>
					)}
				</div>
			)}
		</HeaderMain>
	);
}

export default Header;
