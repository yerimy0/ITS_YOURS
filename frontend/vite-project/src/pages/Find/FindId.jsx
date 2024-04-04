import React from 'react';
import { Wrapper, Logo } from '../../components/Users/UsersStyles.jsx';
import FindIdForm from '../../components/Users/FindIdForm.jsx';
import AdditionalOptions from '../../components/Users/AdditionalOprions.jsx';

const FindId = () => {
  return (
    <Wrapper>
      <Logo src="/logoText.png" alt="로고" />
      <FindIdForm />
      <AdditionalOptions options={[
        { label: "비밀번호찾기", path: "/findpassword" },
      ]} />
    </Wrapper>
  );
};

export default FindId;