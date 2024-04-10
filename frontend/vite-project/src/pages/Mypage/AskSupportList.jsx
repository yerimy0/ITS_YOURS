import React, { useState, useEffect } from 'react';
import { Container } from '../../components/pages/Mypage/AskSupportList/AskSupportListStyles';
import { Title } from '../../components/Users/UsersStyles';
import AskSupportListForm from '../../components/pages/Mypage/AskSupportList/AskSupportListForm';

function AskSupportList() {
	const [inquiries, setInquiries] = useState([]);

	useEffect(() => {
		// API 호출을 수행합니다.
	}, []);

	return (
		<Container>
			<Title>1:1 문의내역</Title>
			{inquiries.map(inquiry => (
				<div key={inquiry.id}>
					<p>{inquiry.subject}</p>
					<p>{inquiry.status}</p>
				</div>
			))}
			<AskSupportListForm />
		</Container>
	);
}

export default AskSupportList;
