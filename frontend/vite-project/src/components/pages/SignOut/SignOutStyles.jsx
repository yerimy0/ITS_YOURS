import styled from 'styled-components';

export const SignOutLink = styled.div`
margin-top: 20px;
color: #79747E;
cursor: pointer;
font-size: 14px;
&:hover {
  text-decoration: underline;
}
`;

export const ModalBackground = styled.div`
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

export const ModalContainer = styled.div`
  padding: 32px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h1`
  color: #333;
  font-size: 22px;
  text-align: center;
  margin-bottom: 24px;
`;

export const ModalMessage = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
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

export const ConfirmButton = styled(Button)`
  background-color: #eee;
  color: #333;
`;

export const CancelButton = styled(Button)`
  background-color: #B3261E;
  color: white;
`;
