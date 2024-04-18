import React from 'react';
import ReactDOM from 'react-dom';
import instance from '../../../apis/axiosInstance';
import {
	ModalBackground,
	ModalContainer,
	ModalTitle,
	ModalMessage,
	ButtonsContainer,
	ConfirmButton,
	CancelButton,
} from './SignOutStyles';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../apis/service/LoginApi';

function SignOutModal({ isOpen, onClose }) {
	const navigate = useNavigate();

	if (!isOpen) return null;

	async function handleSignOut() {
		try {
			await instance.delete('/members/me');
			console.log('회원 탈퇴 성공');
			onClose();
			await logout();
			window.location.reload();
			navigate(`/`);
		} catch (error) {
			console.log('회원 탈퇴 실패:', error.response);
		}
	}

	return ReactDOM.createPortal(
		<ModalBackground onClick={onClose}>
			<ModalContainer onClick={e => e.stopPropagation()}>
				<ModalTitle>정말 탈퇴하시겠어요?</ModalTitle>
				<ModalMessage>
					회원 탈퇴 시 <br />
					계정은 삭제되며 <br />
					복구되지 않습니다.
				</ModalMessage>
				<ButtonsContainer>
					<ConfirmButton onClick={onClose}>더 써볼래요</ConfirmButton>
					<CancelButton onClick={handleSignOut}>떠날래요</CancelButton>
				</ButtonsContainer>
			</ModalContainer>
		</ModalBackground>,
		document.getElementById('modal-root'),
	);
}

export default SignOutModal;
