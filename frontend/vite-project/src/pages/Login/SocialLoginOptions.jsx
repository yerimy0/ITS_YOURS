import React from 'react';
import { SocialLogin, SocialLoginTitle, SocialButtonContainer, SocialButton } from './LoginStyles.jsx';

const SocialLoginOptions = () => (
  <SocialLogin>
    <SocialLoginTitle>SNS 계정으로 로그인</SocialLoginTitle>
    <SocialButtonContainer>
      <SocialButton className="naver"><img src="./naverbutton.png" alt="Naver 로그인" /></SocialButton>
      <SocialButton className="google"><img src="./googlebutton.png" alt="Google 로그인" /></SocialButton>
    </SocialButtonContainer>
  </SocialLogin>
);

console.log()
export default SocialLoginOptions;

