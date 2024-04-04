import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './DynamicForm';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isAuthenticated = await authenticateUser(userId, password);
    if (isAuthenticated) {
      navigate('/home'); 
    } else {
      alert('아이디 또는 비밀번호가 맞지 않습니다.다시 확인해주세요.');
    }
  };

  const authenticateUser = async (userId, password) => {
    // 인증 로직 구현
    return true; // 임시로 항상 true를 반환
  };

  return (
    <DynamicForm
      inputPlaceholder1="아이디를 입력해주세요"
      inputPlaceholder2="비밀번호를 입력해주세요"
      buttonText="로그인"
      onSubmit={handleSubmit}
      setUserId={setUserId}
      setPassword={setPassword}
    />
  );
};

export default LoginForm;
