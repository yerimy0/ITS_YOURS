import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindIdForm from '../../components/pages/Find/FindIdForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

<<<<<<< HEAD
function FindId () {
  return (
    <Wrapper>
      <LogoLink src="/logoText.png" />
      <FindIdForm />
      <AdditionalOptions options={[
        { label: "비밀번호찾기", path: "/findpassword" },
      ]} />
    </Wrapper>
  );
=======
const FindId = () => {
	return (
		<Wrapper>
			<LogoLink src="/logoText.png" />
			<FindIdForm />
			<AdditionalOptions options={[{ label: '비밀번호찾기', path: '/findpassword' }]} />
		</Wrapper>
	);
>>>>>>> 32f572318d96e884c65818d0a73d8d6c8a5c833d
};

export default FindId;
