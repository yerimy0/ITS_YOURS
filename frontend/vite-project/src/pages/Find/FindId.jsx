import React from 'react';
import { Wrapper } from '../../components/Users/UsersStyles';
import FindIdForm from '../../components/pages/Find/FindIdForm';
import AdditionalOptions from '../../components/Users/AdditionalOptions';
import LogoLink from '../../components/Users/LogoLink';

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
};

export default FindId;