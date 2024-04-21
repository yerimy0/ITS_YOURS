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
	width: 60%;
	max-width: 800px;
	margin: 0 auto;
`;

export const Input = styled.input`
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
`;

export const TextArea = styled.textarea`
	padding: 10px;
	padding-bottom: 300px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: white;
	border: 1px solid #009dff;
	border-radius: 20px;
	color: #009dff;
	font-size: 16px;
	cursor: pointer;
	margin-top: 10px;

	&:hover {
		background-color: #009dff;
		color: white;
	}
`;

export const ErrorText = styled.p`
	color: #b3261e;
`;
