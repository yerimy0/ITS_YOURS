import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles.jsx';
import FindPasswordForm from '../../components/Users/FindPasswordForm.jsx';
import AdditionalOptions from '../../components/Users/AdditionalOptions.jsx';
import LogoLink from '../../components/Users/LogoLink';

const FindPassword = () => {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" alt="로고" />
			<FindPasswordForm />
			<AdditionalOptions options={[{ label: '아이디찾기', path: '/findid' }]} />
		</Wrapper>
	);
};

export default FindPassword;
