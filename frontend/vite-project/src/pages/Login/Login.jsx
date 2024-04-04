import React from 'react';
import { LoginWrapper, Logo } from './LoginStyles.jsx';
import DynamicForm from './DynamicForm.jsx'; 
import SocialLoginOptions from './SocialLoginOptions.jsx';
import AdditionalOptions from './AdditionalOptions.jsx';

const Login = () => {
  return (
    <LoginWrapper>
      <Logo src="/logoText.png" alt="로고" />
      <DynamicForm
        inputPlaceholder1="아이디를 입력해주세요"
        inputPlaceholder2="비밀번호를 입력해주세요"
        buttonText="로그인"
      />
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
