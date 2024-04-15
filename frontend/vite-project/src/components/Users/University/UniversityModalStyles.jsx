import styled from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	max-height: 80%;
	overflow-y: auto;
`;

export const ModalButton = styled.button`
	display: block;
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	background: none;
	border: 1px solid #ccc;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
`;
