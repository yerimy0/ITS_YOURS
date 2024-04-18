import styled from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 48px;
	align-self: stretch;
`;

const WriteForm = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 48px 47px;

	border-radius: 30px;
	box-shadow:
		0 10px 20px rgba(0, 0, 0, 0.09),
		0 6px 6px rgba(0, 0, 0, 0.02);

	@media (max-width: 500px) {
		width: 90%;
		padding: 40px 20px;
	}
`;

const InputBox = styled.div`
	width: 100%;
`;
const InputTitle = styled.input`
	display: block;
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 1px solid #eee;
	border-radius: 0 !important;
	font-size: 32px;
	font-weight: 600;
	&placeholder {
		color: #ded8e1;
	}

	@media (max-width: 500px) {
		font-size: 22px;
	}
`;

const InputContent = styled.textarea`
	width: 100%;
	min-height: 300px;
	font-size: 18px;
	margin: 20px 0;
	&placeholder {
		color: #ded8e1;
		text-align: center;
	}

	@media (max-width: 500px) {
		min-height: 200px;
	}
`;

const Img = styled.img`
	width: 50%;
`;

export { Box, WriteForm, InputBox, InputTitle, InputContent, Img };
