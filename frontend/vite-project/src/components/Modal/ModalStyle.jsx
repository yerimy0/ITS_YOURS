import styled from 'styled-components';

const ModalWrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

const ModalContent = styled.div`
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

const Title = styled.h2`
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

const Text = styled.p`
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

const Buttons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-top: 1px solid #eee;

	@media (max-width: 500px) {
	}
`;

const CancelButton = styled.button`
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

	@media (max-width: 500px) {
		font-size: 16px;
		padding: 25px 0;
	}
`;

const OkButton = styled.button`
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

export { ModalWrap, ModalContent, Title, Text, Buttons, CancelButton, OkButton };
