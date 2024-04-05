import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles.jsx';
import FindIdForm from '../../components/Users/FindIdForm.jsx';
import AdditionalOptions from '../../components/Users/AdditionalOptions.jsx';
import LogoLink from '../../components/Users/LogoLink';

const FindId = () => {
  return (
    <Wrapper>
      <LogoLink src="/logoText.png" />
      <FindIdForm />
      <AdditionalOptions options={[
        { label: "비밀번호찾기", path: "/findpassword" },
      ]} />
    </Wrapper>
  );
};

export default FindId;