import React, { useState } from 'react';
import ProfileForm from '../../Users/ProfileForm';
import ProfileImageUploader from '../../Users/ProfileImageUploader';

const SignUpForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('password', password);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    
    // 서버에 회원가입 요청을 보내는 코드를 여기에 추가하세요.
    console.log('회원가입 로직을 구현하세요.');
    
    // 예: const response = await fetch('YOUR_API_ENDPOINT', { method: 'POST', body: formData });
    // 응답 처리 로직
  };

  return (
    <>
      <ProfileImageUploader onImageSelected={setProfileImage} />
      <ProfileForm
        inputPlaceholder1="아이디를 입력하세요"
        inputPlaceholder2="비밀번호를 입력하세요"
        buttonText="회원가입하기"
        onSubmit={handleSubmit}
        setInput1={setUserId} 
        setInput2={setPassword} 
      />
    </>
  );
};

export default SignUpForm;
