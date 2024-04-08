import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles.jsx';
import LoginForm from '../../components/Users/LoginForm.jsx';
import SocialLoginOptions from '../../components/Users/SocialLoginOptions';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

const Login = () => {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" alt="로고" />
			<LoginForm />
			<AdditionalOptions
				options={[
					{ label: '아이디찾기', path: '/findid' },
					{ label: '비밀번호찾기', path: '/findpassword' },
					{ label: '회원가입', path: '/signup' },
				]}
			/>
			<SocialLoginOptions />
		</Wrapper>
	);
};

export default Login;
