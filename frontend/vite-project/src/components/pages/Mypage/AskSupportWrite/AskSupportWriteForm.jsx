import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from './AskSupportWriteStyles';
import { InputField } from './InputField';
import { ErrorMessage } from './ErrorMessage';
import { SubmitButton } from './SubmitButton';
import { submitInquiry } from '../../../../apis/service/AskSupportApi'; // 이 줄을 확인하거나 추가
import Modal from '../../../Users/Modal';

function AskSupportWriteForm() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState('');
	const [isModalOpen, setModalOpen] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setError('');

		submitInquiry(title, content)
			.then(() => {
				setModalOpen(true);
			})
			.catch(error => {
				console.error('문제가 발생했습니다:', error);
				setError('문제가 발생했습니다. 다시 시도해 주세요.');
			});
	}

	function handleModalClose() {
		setModalOpen(false);
		navigate('/asksupportlist');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<InputField
				type="text"
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder="제목을 입력하세요."
			/>
			<InputField
				type="textarea"
				value={content}
				onChange={e => setContent(e.target.value)}
				placeholder="내용을 입력하세요."
			/>
			<SubmitButton>등록하기</SubmitButton>
			{error && <ErrorMessage message={error} />}
			<Modal isOpen={isModalOpen} message="글 작성이 완료되었습니다." onClose={handleModalClose} />
		</Form>
	);
}

export default AskSupportWriteForm;
