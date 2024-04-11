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
	width: 400px;
	height: 200px;
	padding: 20px 20px 30px 20px;
	border-radius: 20px;
	background: #fff;
	box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
	margin: 0;
`;

const Text = styled.p`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	flex-grow: 1;
`;

const Buttons = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const CancelButton = styled.button`
	display: flex;
	width: auto;
	height: auto;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #fff;
	color: #009dff;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
`;

const OkButton = styled.button`
	display: flex;
	width: auto;
	height: auto;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #009dff;
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
`;

export { ModalWrap, ModalContent, Title, Text, Buttons, CancelButton, OkButton };
