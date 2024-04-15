import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-color: #f0f0f0;
`;

export const InfoBox = styled.div`
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

export const Message = styled.p`
	font-weight: bold;
	margin-bottom: 20px;
	font-size: 2.5vw;
	@media (min-width: 769px) {
		font-size: 24px;
	}
	@media (max-width: 768px) {
		font-size: 20px;
	}
	@media (max-width: 480px) {
		font-size: 18px;
	}
`;

export const HighlightedText = styled.span`
	color: #009dff;
`;

export const LoginButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #007acc;
	}
`;
