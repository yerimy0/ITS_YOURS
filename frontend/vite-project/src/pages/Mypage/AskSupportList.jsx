import React, { useState } from 'react';
import { Title } from '../../components/Users/UsersStyles'; // Title 컴포넌트 임포트
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

	return (
		<Container>
			<Title>1:1문의내역</Title> {/* 타이틀을 컨테이너 안에 추가 */}
			<InquiryList
				inquiries={inquiries}
				toggleContent={toggleContent}
				deleteInquiry={deleteInquiry}
			/>
			<InquiryButton>1:1문의하기</InquiryButton>
		</Container>
	);
}

export default AskSupportList;
