import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, ErrorMessage } from '../../Users/UsersStyles';
import Modal from '../../Users/Modal';
import { loginApi } from './LoginApi';
import UserIdContext from '../../../context/UserIdContext';

const LoginForm = () => {
	const navigate = useNavigate();
	const [userId, setUserId] = useState('');
	const [userIdError, setUserIdError] = useState('');
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const { setId } = useContext(UserIdContext);

	const handleUserIdBlur = () => {
		if (!userId.trim()) {
			setUserIdError('아이디를 입력해주세요.');
		} else {
			setUserIdError('');
		}
	};

	const handlePasswordBlur = () => {
		if (!password) {
			setPasswordError('비밀번호를 입력해주세요.');
		} else {
			setPasswordError('');
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const res = await loginApi(userId, password);
			console.log(res);
			if (res.accessToken) {
				document.cookie = `authToken=${res.accessToken}; path=/; Secure`;
				setId(userId);
				navigate('/');
			} else {
				throw new Error('아이디 또는 비밀번호가 맞지 않습니다.\n다시 확인해주세요.');
			}
		} catch (err) {
			setIsModalOpen(true);
			setModalMessage(err.message);
			setTimeout(() => setIsModalOpen(false), 3000);
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="아이디를 입력해주세요"
					value={userId}
					onChange={e => setUserId(e.target.value)}
					onBlur={handleUserIdBlur}
				/>
				{userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
				<Input
					type="password"
					placeholder="비밀번호를 입력해주세요"
					value={password}
					onChange={e => setPassword(e.target.value)}
					onBlur={handlePasswordBlur}
				/>
				{passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
				<Button type="submit">로그인</Button>
			</Form>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default LoginForm;
