import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContainer, ModalTitle, ModalMessage, ButtonsContainer, ConfirmButton, CancelButton } from './SignOutStyles'
import { useNavigate } from 'react-router-dom'; 

const SignOutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleSignOut = () => {
    onClose(); 
    navigate('/signout');
  };

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
    document.getElementById('modal-root')
  );
};

export default SignOutModal;
