import React, { useState } from 'react';
import {
	ModalWrapper,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Button,
	BodyDate,
	BodyDetail,
	BodyId,
} from './AdminModalStyle';

function AdminModal({ isOpen, onClose, qna, onAnswer }) {
	const [answer, setAnswer] = useState('');

	const handleAnswerChange = event => {
		setAnswer(event.target.value);
	};

	const handleAnswerSubmit = () => {
		if (answer.trim()) {
			onAnswer(answer, qna.id);
			setAnswer('');
		} else {
			alert('');
		}
	};

	return (
		<ModalWrapper isOpen={isOpen}>
			<ModalContent>
				<ModalHeader>답변하기</ModalHeader>
				<ModalBody>
					<BodyId htmlFor="qnaName">{qna.id}</BodyId>
					<BodyDate htmlFor="qnaDate">{qna.date}•</BodyDate>
					<BodyDetail htmlFor="qnaContent">{qna.detail}</BodyDetail>
					<Input
						id="answerInput"
						type="text"
						placeholder="답변을 입력하세요."
						value={answer}
						onChange={handleAnswerChange}
					/>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>취소</Button>
					<Button onClick={handleAnswerSubmit}>답변하기</Button>
				</ModalFooter>
			</ModalContent>
		</ModalWrapper>
	);
}

export default AdminModal;
