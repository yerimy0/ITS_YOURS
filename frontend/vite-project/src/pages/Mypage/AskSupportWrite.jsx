import React from 'react';
import { Title } from '../../components/Users/UsersStyles';
import { Container } from '../../components/pages/Mypage/AskSupportWrite/AskSupportWriteStyles';
import AskSupportForm from '../../components/pages/Mypage/AskSupportWrite/AskSupportWriteForm';

function AskSupportWrite() {
	return (
		<Container>
			<Title>1:1 문의하기</Title>
			<AskSupportForm />
		</Container>
	);
}

export default AskSupportWrite;
