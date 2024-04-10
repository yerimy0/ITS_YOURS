// AskSupportListForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, TextArea, SubmitButton, ErrorText } from './AskSupportListStyles';

function AskSupportListForm() {
	// ... 나머지 코드
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				// 필요한 props 추가
			/>
			<TextArea
			// 필요한 props 추가
			/>
			<SubmitButton type="submit">1:1문의하기</SubmitButton>
			{error && <ErrorText>{error}</ErrorText>}
		</Form>
	);
}

export default AskSupportListForm;
