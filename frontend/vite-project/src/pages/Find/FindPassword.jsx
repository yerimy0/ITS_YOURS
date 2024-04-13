import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindPasswordForm from '../../components/pages/Find/FindPasswordForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

function FindPassword() {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" alt="로고" />
			<FindPasswordForm />
			<AdditionalOptions options={[{ label: '아이디찾기', path: '/findid' }]} />
		</Wrapper>
	);
}

export default FindPassword;
