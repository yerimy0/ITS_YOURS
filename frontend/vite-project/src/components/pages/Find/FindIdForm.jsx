import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, ErrorMessage } from '../../Users/UsersStyles';
import Modal from '../../Users/Modal';
import { findUserId } from '../../../apis/service/FindIdApi';

const FindIdForm = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const handleNameBlur = () => {
		if (!name.trim()) {
			setNameError('이름을 입력해주세요.');
		} else {
			setNameError('');
		}
	};

	const handleEmailBlur = () => {
		if (!email.trim()) {
			setEmailError('이메일을 입력해주세요.');
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError('유효하지 않은 이메일 형식입니다.');
		} else {
			setEmailError('');
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!name.trim() || !email.trim() || nameError || emailError) {
			setModalMessage('이름과 이메일을 모두 입력해주세요.');
			setIsModalOpen(true);
			setTimeout(() => setIsModalOpen(false), 3000);
			return;
		}

		findUserId(name, email, setModalMessage, setIsModalOpen, navigate);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="이름을 입력해주세요"
					value={name}
					onChange={e => setName(e.target.value)}
					onBlur={handleNameBlur}
				/>
				{nameError && <ErrorMessage>{nameError}</ErrorMessage>}
				<Input
					type="text"
					placeholder="이메일을 입력해주세요"
					value={email}
					onChange={e => setEmail(e.target.value)}
					onBlur={handleEmailBlur}
				/>
				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
				<Button type="submit">아이디 찾기</Button>
			</Form>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
			)}
		</>
	);
};

export default FindIdForm;
