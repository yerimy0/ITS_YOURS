import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	SignOutContainer,
	SignOutBox,
	FirstSignOutMessage,
	SecondSignOutMessage,
	HighlightedText,
	CheckButton,
} from '../../components/pages/SignOut/SignOutStyles';

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
				<CheckButton onClick={handleConfirmClick}>확인</CheckButton>
			</SignOutBox>
		</SignOutContainer>
	);
}

export default SignOut;
