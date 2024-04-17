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
import DateSlicer from '../../utils/dateSlicer';

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
			alert('답변을 입력해주세요.');
		}
	};

	return (
		<ModalWrapper isOpen={isOpen}>
			<ModalContent>
				<ModalHeader>답변하기</ModalHeader>
				<ModalBody>
					<BodyId>{qna.nickname}</BodyId>
					<BodyDate>{DateSlicer(qna.createdAt)}•</BodyDate>
					<BodyDetail>{qna.content}</BodyDetail>
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
