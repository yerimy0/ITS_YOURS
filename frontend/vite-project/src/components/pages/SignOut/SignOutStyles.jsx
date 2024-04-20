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
	display: flex;
	width: 450px;
	padding: 30px 0 0;
	border-radius: 20px;
	background: #fff;
	box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;

	@media (max-width: 500px) {
		width: 80%;
		padding: 25px 0 0;
	}
`;

export const ModalTitle = styled.h1`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 15px;
	white-space: pre-line;

	@media (max-width: 500px) {
		font-size: 22px;
	}
`;

export const ModalMessage = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
	font-size: 18px;
	margin-bottom: 30px;
	color: #444;
	white-space: pre-line;

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-top: 1px solid #eee;

	@media (max-width: 500px) {
	}
`;

export const Button = styled.button`
	margin-bottom: 10px;
`;

export const ConfirmButton = styled(Button)`
	width: 50%;
	border-right: 1px solid #eee;
	padding: 30px 0;
	font-size: 18px;
	color: #009dff;
	font-weight: 500;
	border-bottom-left-radius: 20px;

	&:hover {
		background: #fafafa;
		color: #038ee5;
		transition: all 0.5s;
	}
`;

export const CancelButton = styled(Button)`
	width: 50%;
	text-align: center;
	padding: 30px 0;
	font-size: 18px;
	color: #009dff;
	font-weight: 500;
	border-bottom-right-radius: 20px;

	&:hover {
		background: #fafafa;
		color: #038ee5;
		transition: all 0.5s;
	}

	@media (max-width: 500px) {
		font-size: 16px;
		padding: 25px 0;
	}
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

export const CheckButton = styled.button``;
