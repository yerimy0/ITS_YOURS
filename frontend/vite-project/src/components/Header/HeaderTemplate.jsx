import { NavLink } from "react-router-dom";
import { RightNav, HeaderMain, LeftNav } from "./HeaderSytle";
import { useState } from "react";

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <HeaderMain>
      <RightNav>
        <img src="/main_logo.png" />
        <NavLink className="MainLink" to="/">
          도서거래
        </NavLink>
        <NavLink to="/">커뮤니티</NavLink>
        <NavLink to="/">채팅하기</NavLink>
        <NavLink to="/">내책판매</NavLink>
      </RightNav>
      <LeftNav>
        {isAuth ? (
          <NavLink to="/">너의페이지</NavLink>
        ) : (
          <NavLink to="/">로그인/회원가입</NavLink>
        )}
        <img src="/light.png" />
      </LeftNav>
    </HeaderMain>
  );
}

export default Header;
