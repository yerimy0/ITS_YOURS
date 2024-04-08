import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import SignUpForm from '../../components/pages/SignUp/SignUpForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

function SignUp() {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" alt="로고" />
			<SignUpForm />
			<AdditionalOptions options={[{ label: '로그인하기', path: '/login' }]} />
		</Wrapper>
	);
}

export default SignUp;
