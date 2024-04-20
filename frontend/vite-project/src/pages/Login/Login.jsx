import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import LoginForm from '../../components/pages/Login/LoginForm';
// import SocialLoginOptions from '../../components/pages/Login/SocialLoginOptions';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

function Login() {
	return (
		<Wrapper>
			<div className="login_container">
				<div className="link_wrap">
					<LogoLink className="logo_link" src="/logoText.png" alt="로고" />
					<p style={{ fontWeight: 500 }}>
						이제<span style={{ color: '#009dff' }}>너:</span>해 에 오신 것을 환영합니다
					</p>
				</div>
				<LoginForm />
				<AdditionalOptions
					options={[
						{ label: '아이디찾기', path: '/findid' },
						{ label: '비밀번호찾기', path: '/findpassword' },
						{ label: '회원가입', path: '/signup' },
					]}
				/>
				{/* <SocialLoginOptions /> */}
			</div>
		</Wrapper>
	);
}

export default Login;
