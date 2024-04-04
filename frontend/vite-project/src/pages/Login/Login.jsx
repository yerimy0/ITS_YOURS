import React from 'react';
import { LoginWrapper, Logo } from './LoginStyles.jsx';
import LoginForm from '../../components/LoginForm.jsx';
import SocialLoginOptions from '../../components/SocialLoginOptions.jsx';
import AdditionalOptions from './AdditionalOptions.jsx';

const Login = () => {
  return (
    <LoginWrapper>
      <Logo src="/logoText.png" alt="로고" />
      <LoginForm />
      <AdditionalOptions options={[
        { label: "아이디찾기", path: "/find-id" },
        { label: "비밀번호찾기", path: "/find-password" },
        { label: "회원가입", path: "/sign-up" }
      ]} />
      <SocialLoginOptions />
    </LoginWrapper>
  );
};

export default Login;
