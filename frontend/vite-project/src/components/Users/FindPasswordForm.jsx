import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './DynamicForm';

const FindPasswordForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(''); 
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 이메일로 임시 비밀번호 정보를 보냈다고 가정하는 로직
    const isEmailSent = await sendPasswordByEmail(userId, email);
    if (isEmailSent) {
      alert(`귀하의 이메일 주소(${email})로 임시 비밀번호를 보냈습니다. 이메일을 확인해주세요.`);
      navigate('/login');
    } else {
      alert('해당 아이디로 등록된 계정이 없거나 이메일 전송에 실패했습니다. 다시 확인해주세요.');
    }
  };

  const sendPasswordByEmail = async (userId, email) => {

    return true; // 이메일 전송 성공을 가정
  };

  return (
    <DynamicForm
      inputPlaceholder1="아이디를 입력해주세요" 
      inputPlaceholder2="이메일을 입력해주세요"
      buttonText="비밀번호 찾기" 
      onSubmit={handleSubmit}
      setInput1={setUserId} 
      setInput2={setEmail} 
    />
  );
};

export default FindPasswordForm;
