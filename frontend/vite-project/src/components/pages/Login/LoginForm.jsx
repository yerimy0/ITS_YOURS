import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../Users/DynamicForm';
import Modal from '../../Users/Modal';
import { loginApi } from './LoginApi';

const LoginForm = () => {
	const navigate = useNavigate();
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();
		const res = await loginApi(userId, password);
		console.log(res);
		if (res.accessToken) {
			// 쿠키에 토큰 저장 (쿠키 관련 코드 직접 추가)
			document.cookie = `authToken=${res.accessToken}; path=/; Secure`;
			navigate('/');
		} else {
			setIsModalOpen(true);
			setModalMessage(error || '아이디 또는 비밀번호가 맞지 않습니다.\n다시 확인해주세요.');
			setTimeout(() => setIsModalOpen(false), 3000);
		}
	};

	return (
		<>
			<DynamicForm
				inputPlaceholder1="아이디를 입력해주세요"
				inputPlaceholder2="비밀번호를 입력해주세요"
				buttonText="로그인"
				onSubmit={handleSubmit}
				setInput1={setUserId}
				setInput2={setPassword}
			/>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default LoginForm;
