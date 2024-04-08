import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindPasswordForm from '../../components/pages/Find/FindPasswordForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

<<<<<<< HEAD
function FindPassword () {
  return (
    <Wrapper>
      <LogoLink src="/logoText.png" alt="로고" />
      <FindPasswordForm />
      <AdditionalOptions options={[
        { label: "아이디찾기", path: "/findid" },
      ]} />
    </Wrapper>
  );
=======
const FindPassword = () => {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" alt="로고" />
			<FindPasswordForm />
			<AdditionalOptions options={[{ label: '아이디찾기', path: '/findid' }]} />
		</Wrapper>
	);
>>>>>>> 32f572318d96e884c65818d0a73d8d6c8a5c833d
};

export default FindPassword;
