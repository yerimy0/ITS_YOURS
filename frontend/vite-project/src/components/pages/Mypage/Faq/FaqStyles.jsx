import styled from 'styled-components';

export const Title = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 70px;
	padding-bottom: 20px;
	font-size: 48px;
	font-weight: 500 !important;
	line-height: 64px;
	width: 800px;
	margin: 0 auto;

	@media (max-width: 850px) {
		width: 90%;
		font-size: 38px;
		line-height: 45px;

		.bottom_title {
			font-size: 30px;
			word-break: keep-all;
		}

		.bottom_sub {
			font-size: 16px;
			word-break: keep-all;
		}
	}
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
	width: 800px;
	margin: 0 auto;
	border-bottom: 1px solid #ccc;

	.faq-item {
		border-top: 1px solid #ccc;
		padding: 20px 0;
		font-size: 15px;
	}

	@media (max-width: 850px) {
		width: 98%;

		.faq-item {
			padding: 20px 10px;
		}
	}
`;

export const StyledFaqItem = styled.div`
	.faq-question {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.faq-answer {
		margin-top: 20px;
		padding: 10px;
		white-space: pre-line;
		color: #666;
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

	@media (max-width: 850px) {
		.faq-question {
			font-size: 17px;
		}

		.toggle-answer img {
			width: 20px;
			height: 20px;
		}
	}
`;

export const ButtonWrapper = styled.div`
	width: 800px;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;

	@media (max-width: 850px) {
		width: 95%;
	}
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: white;
	border: 1px solid #009dff;
	color: #009dff;
	font-size: 16px;
	font-weight: 500;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 20px;
	margin-bottom: 40px;
	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}
`;
