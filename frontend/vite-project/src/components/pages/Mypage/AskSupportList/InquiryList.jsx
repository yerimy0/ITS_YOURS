import React, { useEffect, useState } from 'react';
import InquiryItem from './InquiryItem';
import { InquiryList as StyledInquiryList } from './AskSupportListStyles';
import { fetchInquiries } from '../../../../apis/service/AskSupportApi';

function InquiryList({ toggleContent, deleteInquiry }) {
	const [inquiries, setInquiries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchInquiries();
				if (response && Array.isArray(response.data)) {
					setInquiries(response.data);
				} else {
					console.error('반환된 데이터가 배열이 아닙니다:', response);
					setInquiries([]);
				}
			} catch (error) {
				console.error('문의사항을 가져오는데 실패했습니다:', error);
				setInquiries([]);
			}
		};

		fetchData();
	}, []);

	return (
		<StyledInquiryList>
			{inquiries.map(inquiry => (
				<InquiryItem
					key={inquiry._id}
					inquiry={inquiry}
					toggleContent={toggleContent}
					deleteInquiry={deleteInquiry}
				/>
			))}
		</StyledInquiryList>
	);
}

export default InquiryList;
