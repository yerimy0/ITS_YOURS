import React from 'react';
import { Wrapper, Logo } from '../../components/Users/UsersStyles';
import SignUpForm from '../../components/Users/SignUpForm';
import AdditionalOptions from '../../components/Users/AdditionalOprions';

const SignUp = () => {
  const additionalOptions = [
    { label: '로그인하기', path: '/login' },
  ];
  return (
    <Wrapper>
      <Logo src="/logoText.png" alt="로고" />
      <SignUpForm />
      <AdditionalOptions options={additionalOptions} />
    </Wrapper>
  );
};

export default SignUp;
