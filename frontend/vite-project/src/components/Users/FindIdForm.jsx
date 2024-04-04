import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './DynamicForm';

const FindIdForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 이메일로 아이디 정보를 보냈다고 가정하는 로직
    const isEmailSent = await sendIdByEmail(name, email);
    if (isEmailSent) {
      alert(`귀하의 이메일 주소(${email})로 아이디를 보냈습니다. 이메일을 확인해주세요.`);
      navigate('/login'); 
    } else {
      alert('해당 정보로 등록된 아이디가 없거나 이메일 전송에 실패했습니다. 다시 확인해주세요.');
    }
  };

  const sendIdByEmail = async (name, email) => {

    
    return true; // 이메일 전송 성공을 가정
  };

  return (
    <DynamicForm
      inputPlaceholder1="이름을 입력해주세요"
      inputPlaceholder2="이메일을 입력해주세요"
      buttonText="아이디 찾기"
      onSubmit={handleSubmit}
      setInput1={setName} 
      setInput2={setEmail} 
    />
  );
};

export default FindIdForm;
