import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InquiryItem from './InquiryItem';
import { InquiryList as StyledInquiryList } from './AskSupportListStyles';

function InquiryList({ toggleContent, deleteInquiry }) {
	const [inquiries, setInquiries] = useState([]);

	useEffect(() => {
		const fetchInquiries = async () => {
			try {
				const response = await axios.get('/api/qna');
				setInquiries(response.data);
			} catch (error) {
				console.error('Failed to fetch inquiries:', error);
			}
		};

		fetchInquiries();
	}, []); // 컴포넌트가 마운트될 때 한 번만 호출

	return (
		<StyledInquiryList>
			{inquiries.map(inquiry => (
				<InquiryItem
					key={inquiry.id}
					inquiry={inquiry}
					toggleContent={toggleContent}
					deleteInquiry={deleteInquiry}
				/>
			))}
		</StyledInquiryList>
	);
}

export default InquiryList;
