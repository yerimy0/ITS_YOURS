import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignOutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

const SignOutBox = styled.div`
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

const FirstSignOutMessage = styled.p`
	font-weight: bold;
	white-space: nowrap;
	margin-bottom: 10px;
	font-size: 2.5vw;
	@media (min-width: 769px) {
		font-size: 28px;
	}
	@media (max-width: 768px) {
		font-size: 22px;
	}
	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

const SecondSignOutMessage = styled.p`
	white-space: nowrap;
	margin-bottom: 10px;
	font-size: 1.3vw;
	@media (min-width: 769px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
	@media (max-width: 480px) {
		font-size: 14px;
	}
`;

const HighlightedText = styled.span`
	color: #009dff;
`;

const ConfirmButton = styled.button`
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 20px;
	padding: 10px 20px;
	margin-top: 32px;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		background-color: #002d7a;
	}
	@media (max-width: 768px) {
		padding: 8px 16px;
		font-size: 14px;
	}
`;

function SignOut() {
	const navigate = useNavigate();

	const handleConfirmClick = () => {
		navigate('/');
	};

	return (
		<SignOutContainer>
			<SignOutBox>
				<FirstSignOutMessage>
					그동안 <HighlightedText>이제너해</HighlightedText>를 이용해 주셔서 감사합니다
				</FirstSignOutMessage>
				<SecondSignOutMessage>
					탈퇴가 완료되었습니다. 앞으로 더욱 좋은 모습으로 찾아뵙겠습니다
				</SecondSignOutMessage>
				<ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
			</SignOutBox>
		</SignOutContainer>
	);
}

export default SignOut;
