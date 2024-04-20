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
	position: relative;
	width: 400px;
	height: 70%;
	overflow-y: scroll;
	background: #fff;
	padding: 30px 0;
	border-radius: 20px;

	p {
		width: 100%;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 15px;
	}

	@media (max-width: 700px) {
		width: 85%;
	}
`;

export const ModalButton = styled.button`
	display: block;
	width: 100%;
	padding: 15px;
	background: none;
	border-top: 1px solid #eee;
	font-size: 15px;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background-color: #fafafa;
		color: #009dff;
	}

	&:last-child {
		border-bottom: 1px solid #eee;
	}
`;

export const Input = styled.input`
	display: block;
	width: 90%;
	margin: 0 auto 20px;
	padding: 10px;
	border: 1px solid #eee;
	font-size: 16px;
`;
