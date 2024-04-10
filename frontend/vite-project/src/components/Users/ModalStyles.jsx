import styled from 'styled-components';

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
	padding: 16px;
	background: #fff;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	width: 400px;
`;

export const ModalMessage = styled.p`
	margin-bottom: 30px;
	color: #49454f;
	font-size: 16px;
	text-align: center;
	white-space: pre-line;
`;

export const CloseButton = styled.button`
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		background-color: #002d7a;
	}
`;
