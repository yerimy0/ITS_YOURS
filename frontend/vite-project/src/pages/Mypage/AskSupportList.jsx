import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import { Title } from '../../components/Users/UsersStyles';
import InquiryList from '../../components/pages/Mypage/AskSupportList/InquiryList';
import {
	InquiryButton,
	Container,
} from '../../components/pages/Mypage/AskSupportList/AskSupportListStyles';

function AskSupportList() {
	const [inquiries, setInquiries] = useState([
		...Array(10)
			.fill(null)
			.map((_, index) => ({
				id: index + 1,
				title: `제목 ${index + 1}`,
				content: `내용 ${index + 1}`,
				status: index % 2 === 0 ? '대기중' : '완료',
				show: false,
			})),
	]);

	const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

	function toggleContent(id) {
		const updatedInquiries = inquiries.map(inquiry =>
			inquiry.id === id ? { ...inquiry, show: !inquiry.show } : inquiry,
		);
		setInquiries(updatedInquiries);
	}

	function deleteInquiry(id) {
		const updatedInquiries = inquiries.filter(inquiry => inquiry.id !== id);
		setInquiries(updatedInquiries);
	}

	function handleInquiryClick() {
		navigate('/asksupportwrite'); // navigate 함수를 사용하여 /asksupportwrite 경로로 이동
	}

	return (
		<Container>
			<Title>1:1문의내역</Title>
			<InquiryList
				inquiries={inquiries}
				toggleContent={toggleContent}
				deleteInquiry={deleteInquiry}
			/>
			<InquiryButton onClick={handleInquiryClick}>1:1문의하기</InquiryButton>
		</Container>
	);
}

export default AskSupportList;
