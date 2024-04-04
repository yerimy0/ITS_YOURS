import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './DynamicForm';

const FindIdForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = await findUserId(email);
    if (userId) {
      alert(`귀하의 아이디는 ${userId} 입니다.`);
      navigate('/login'); // 사용자가 로그인 페이지로 이동할 수 있도록 한다.
    } else {
      alert('해당 이메일로 등록된 아이디가 없습니다. 다시 확인해주세요.');
    }
  };

  const findUserId = async (email) => {
    // 아이디 찾기 로직 구현, 임시로 아이디 반환
    return "exampleUserId"; // 이메일에 기반한 사용자 아이디를 조회하여 반환
  };

  return (
    <DynamicForm
      inputPlaceholder1="이메일을 입력해주세요"
      buttonText="아이디 찾기"
      onSubmit={handleSubmit}
      setInput1={setEmail} // 이전 예제에서 사용된 setUserId, setPassword를 setInput1로 변경하여 사용
    />
  );
};

export default FindIdForm;
