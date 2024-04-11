import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: ${props => (props.isOpen ? 'flex' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const ModalContent = styled.div`
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	width: 500px;
	display: flex;
	flex-direction: column;
`;

export const ModalHeader = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const ModalBody = styled.div`
	font-size: 1rem;
	margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const Input = styled.input`
	width: 90%;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	&:first-child {
		color: #009dff;
		border-radius: 20px;
		border: 1.5px solid #009dff;
		background: #fff;
		text-align: center;
		font-family: SUIT;
		font-size: 20px;
	}
	&:last-child {
		background-color: #007bff; // Submit button color
		border-radius: 20px;
		text-align: center;
		font-family: SUIT;
		font-size: 20px;
	}
	&:hover {
		opacity: 0.9;
	}
`;

export const BodyId = styled.div`
	color: #1e1e1e;
	font-family: 'Noto Sans KR';
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 10px 0px;
`;

export const BodyDate = styled.div`
	color: rgba(30, 30, 30, 0.6);
	font-family: 'Noto Sans KR';
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 30px;
`;

export const BodyDetail = styled.div`
	color: #000;
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	margin: 20px 0px;
	padding: 20px 0px;
`;
