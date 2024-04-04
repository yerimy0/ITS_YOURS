import React from 'react';
import { Wrapper, Logo } from '../../components/Users/UsersStyles.jsx';
import FindPasswordForm from '../../components/Users/FindPasswordForm.jsx';
import AdditionalOptions from '../../components/Users/AdditionalOprions.jsx';

const FindPassword = () => {
  return (
    <Wrapper>
      <Logo src="/logoText.png" alt="로고" />
      <FindPasswordForm />
      <AdditionalOptions options={[
        { label: "아이디찾기", path: "/findid" },
      ]} />
    </Wrapper>
  );
};

export default FindPassword;