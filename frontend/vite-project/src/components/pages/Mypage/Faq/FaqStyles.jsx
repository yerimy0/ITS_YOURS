import styled from 'styled-components';

export const Title = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 70px;
	padding-bottom: 20px;
	font-size: 48px;
	font-weight: 700;
	line-height: 64px;
	max-width: 800px;
	margin: 0 auto; 
	width: 100%;
`;

export const SubTitle = styled.div`
	margin-top: 10px; 
	font-size: 1.2rem;
	font-weight: 500;
	white-space: pre-line;
	line-height: 1.5;
`;

export const UserName = styled.span`
	display: block; 
	font-weight: bold; 
`;

export const StyledFaqList = styled.div`
	max-width: 800px;
	margin: 20px auto;
	padding: 0 20px;

	.faq-item {
		border-top: 1px solid #ccc;
		padding: 20px 0;
	}
`;

export const StyledFaqItem = styled.div`
	.faq-question {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 1.2rem;
	}

	.faq-answer {
		margin-top: 10px;
		font-size: 1rem;
		padding-left: 20px; 
	}

	.toggle-answer {
		background: none; 
		border: none;
		cursor: pointer;
	}

	.toggle-answer img {
		width: 24px;
		height: 24px;
	}
`;

export const ButtonWrapper = styled.div`
	max-width: 800px;
	margin: auto;
	display: flex;
	justify-content: flex-start;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: white; 
	border: 1px solid #009dff;
	color: #009dff;
	font-size: 16px;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 20px;
	margin-bottom: 40px;
	&:hover {
		background-color: #009dff;
		color: white;
	}
`;
