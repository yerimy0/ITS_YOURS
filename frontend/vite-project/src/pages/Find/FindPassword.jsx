import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindPasswordForm from '../../components/pages/Find/FindPasswordForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

function FindPassword() {
	return (
		<Wrapper>
			<div className="login_container">
				<div className="link_wrap">
					<LogoLink src="/logoText.png" alt="로고" />
					<p style={{ fontWeight: 500 }}>사용자 아이디, 이메일이 무엇인가요?</p>
				</div>
				<FindPasswordForm />
				<AdditionalOptions options={[{ label: '아이디찾기', path: '/findid' }]} />
			</div>
		</Wrapper>
	);
}

export default FindPassword;
