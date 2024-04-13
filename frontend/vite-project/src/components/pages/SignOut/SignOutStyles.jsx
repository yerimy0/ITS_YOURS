import styled from 'styled-components';

export const SignOutLink = styled.div`
	margin-top: 20px;
	color: #79747e;
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
	background-color: #b3261e;
	color: white;
`;

export const SignOutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const SignOutBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 20px;
	border-radius: 5px;
	text-align: center;
	width: 90%;
	max-width: 600px;
	@media (max-width: 768px) {
		padding: 20px 10px;
	}
`;

export const FirstSignOutMessage = styled.p`
	font-weight: bold;
	white-space: nowrap;
	margin-bottom: 10px;
	font-size: 2.5vw;
	@media (min-width: 769px) {
		font-size: 28px;
	}
	@media (max-width: 768px) {
		font-size: 22px;
	}
	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const SecondSignOutMessage = styled.p`
	white-space: nowrap;
	margin-bottom: 10px;
	font-size: 1.3vw;
	@media (min-width: 769px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
	@media (max-width: 480px) {
		font-size: 14px;
	}
`;

export const HighlightedText = styled.span`
	color: #009dff;
`;

export const CheckButton = styled.button`
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 10px 20px;
	margin-top: 32px;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		background-color: #002d7a;
	}
	@media (max-width: 768px) {
		padding: 8px 16px;
		font-size: 14px;
	}
`;
