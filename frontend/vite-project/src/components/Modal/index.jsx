import React from 'react';
import {
	ModalWrap,
	ModalContent,
	Title,
	Text,
	Buttons,
	CancelButton,
	OkButton,
} from './ModalStyle';

function Modal({ isOpen, onClose, title, content, confirmText, onConfirm }) {
	if (!isOpen) return null;

	return (
		<ModalWrap>
			<ModalContent>
				<Title>{title}</Title>
				<Text>{content}</Text>
				<Buttons>
					<CancelButton onClick={onClose}>취소</CancelButton>
					<OkButton onClick={onConfirm}>{confirmText}</OkButton>
				</Buttons>
			</ModalContent>
		</ModalWrap>
	);
}

export default Modal;
