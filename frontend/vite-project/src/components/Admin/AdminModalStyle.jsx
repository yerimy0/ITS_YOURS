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
	padding: 20px 0 0;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	width: 500px;
	display: flex;
	flex-direction: column;

	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const ModalHeader = styled.div`
	font-size: 24px;
	font-weight: 500;
	padding: 0 0 0 15px;
	margin-bottom: 8px;
`;

export const ModalBody = styled.div`
	/* font-size: 1rem; */
	/* margin-bottom: 20px; */
`;

export const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-top: 1px solid #eee;
`;

export const Input = styled.input`
	display: block;
	width: 90%;
	margin: 0 auto 20px;
	padding: 10px;
	font-size: 15px;
	border: 1px solid #eee;
`;

export const Button = styled.button`
	&:first-child {
		width: 50%;
		border-right: 1px solid #eee;
		padding: 25px 0;
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
	}
	&:last-child {
		width: 50%;
		text-align: center;
		padding: 25px 0;
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
	}
`;

export const BodyId = styled.div`
	font-family: 'Noto Sans KR';
	font-size: 18px;
	font-weight: 500;
	margin: 0 15px 5px;
`;

export const BodyDate = styled.div`
	color: rgba(30, 30, 30, 0.6);
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 30px;
	padding: 0 0 0 15px;
`;

export const BodyDetail = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	margin: 20px 0px;
	padding: 20px 10px;
`;
