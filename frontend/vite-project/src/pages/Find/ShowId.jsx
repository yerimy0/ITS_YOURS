import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Container,
	InfoBox,
	Message,
	HighlightedText,
	LoginButton,
} from '../../components/pages/Find/ShowIdStyles';

function ShowId() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const email = queryParams.get('email');
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/login');
	};

	return (
		<Container>
			<InfoBox>
				<Message>이메일 정보와 일치하는 아이디입니다.</Message>
				<Message>
					이메일: <HighlightedText>{email}</HighlightedText>
				</Message>
				<Message>
					아이디: <HighlightedText>아이디를 여기에 표시</HighlightedText>
				</Message>
				<LoginButton onClick={handleLogin}>로그인하러 가기</LoginButton>
			</InfoBox>
		</Container>
	);
}

export default ShowId;
