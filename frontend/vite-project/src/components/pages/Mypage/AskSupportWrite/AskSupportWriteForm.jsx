import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from './AskSupportWriteStyles';
import { InputField } from './InputField';
import { ErrorMessage } from './ErrorMessage';
import { SubmitButton } from './SubmitButton';
import { submitInquiry } from '../../../../apis/service/AskSupportApi';

function AskSupportWriteForm() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setError('');

		submitInquiry(title, content)
			.then(() => navigate('/asksupportlist'))
			.catch(error => {
				console.error('문제가 발생했습니다:', error);
				setError('문제가 발생했습니다. 다시 시도해 주세요.');
			});
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
		</Form>
	);
}

export default AskSupportWriteForm;
