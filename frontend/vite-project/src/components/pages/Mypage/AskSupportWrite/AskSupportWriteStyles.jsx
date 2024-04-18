import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 800px;
	margin: 0 auto;

	@media (max-width: 870px) {
		width: 98%;
	}
`;

export const Input = styled.input`
	padding: 10px;
	margin: 10px 0 30px;
	border-bottom: 1px solid #eee;
	border-radius: 0 !important;
	width: 100%;
	font-size: 18px;

	&::placeholder {
		color: #999;
	}
`;

export const TextArea = styled.textarea`
	padding: 10px;
	min-height: 345px;
	margin-bottom: 10px;
	border: 1px solid #eee;
	border-radius: 4px;
	width: 100%;
	font-size: 16px;

	&::placeholder {
		color: #999;
	}

	@media (max-width: 850px) {
		min-height: 250px;
	}
`;
export const Button = styled.button`
	padding: 10px 20px;
	background-color: white;
	border: 1px solid #009dff;
	border-radius: 20px;
	color: #009dff;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	margin: 10px 0 20px;

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}
`;

export const ErrorText = styled.p`
	color: #b3261e;
`;
