import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SignOutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTitle>정말 탈퇴하시겠어요?</ModalTitle>
        <ModalMessage>
          회원 탈퇴 시 <br />
          계정은 즉시 삭제되며 <br />
          복구되지 않습니다.
        </ModalMessage>
        <ButtonsContainer>
          <ConfirmButton onClick={onClose}>더 살펴보기</ConfirmButton>
          <CancelButton onClick={onClose}>탈퇴하기</CancelButton>
        </ButtonsContainer>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById('modal-root')
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  padding: 32px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h1`
  color: #333;
  font-size: 22px;
  text-align: center;
  margin-bottom: 24px;
`;

const ModalMessage = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.5;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 0;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #eee;
  color: #333;
`;

const CancelButton = styled(Button)`
  background-color: #d32f2f;
  color: white;
`;

export default SignOutModal;
