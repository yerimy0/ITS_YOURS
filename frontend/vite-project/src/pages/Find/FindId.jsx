import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindIdForm from '../../components/pages/Find/FindIdForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

function FindId() {
	return (
		<Wrapper>
			<div className="login_container">
				<div className="link_wrap">
					<LogoLink src="/logoText.png" />
					<p style={{ fontWeight: 500 }}>사용자 이름, 이메일이 무엇인가요?</p>
				</div>
				<FindIdForm />
				<AdditionalOptions
					className="add_option"
					options={[{ label: '비밀번호찾기', path: '/findpassword' }]}
				/>
			</div>
		</Wrapper>
	);
}

export default FindId;
