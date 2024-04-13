import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContainer, ModalMessage, CloseButton } from './ModalStyles';

function Modal({ isOpen, message, onClose }) {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<ModalBackground onClick={onClose}>
			<ModalContainer onClick={e => e.stopPropagation()}>
				<ModalMessage>{message}</ModalMessage>
				<CloseButton onClick={onClose}>확인</CloseButton>
			</ModalContainer>
		</ModalBackground>,
		document.getElementById('modal-root'),
	);
}

export default Modal;
