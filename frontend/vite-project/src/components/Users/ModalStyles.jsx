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
	display: flex;
	width: 400px;
	padding: 40px 0 0;
	border-radius: 20px;
	background: #fff;
	box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;

	@media (max-width: 500px) {
		width: 85%;
		padding: 25px 0 0;
	}
`;

export const ModalMessage = styled.p`
	/* margin-bottom: 30px; */
	font-size: 20px;
	margin-bottom: 50px;
	text-align: center;
	white-space: pre-line;
`;

export const CloseButton = styled.button`
	color: #009dff;
	border: none;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top: 1px solid #eee;
	width: 100%;
	padding: 25px 0;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		background: #fafafa;
		color: #038ee5;
		transition: all 0.5s;
	}
`;
