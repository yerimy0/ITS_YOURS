import React, { useEffect, useState } from 'react';
import InquiryItem from './InquiryItem';
import { InquiryList as StyledInquiryList, EmptyMessage } from './AskSupportListStyles';
import { fetchInquiries } from '../../../../apis/service/AskSupportApi';

function InquiryList() {
	const [inquiries, setInquiries] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetchInquiries();
				if (response && Array.isArray(response.data)) {
					setInquiries(response.data.map(inquiry => ({ ...inquiry, show: false })));
				} else {
					console.error('반환된 데이터가 배열이 아닙니다:', response);
					setInquiries([]);
				}
			} catch (error) {
				console.error('문의사항을 가져오는데 실패했습니다:', error);
				setInquiries([]);
			}
		}

		fetchData();
	}, []);

	const toggleContent = id => {
		setInquiries(currentInquiries =>
			currentInquiries.map(inquiry =>
				inquiry._id === id ? { ...inquiry, show: !inquiry.show } : inquiry,
			),
		);
	};

	const deleteInquiryFromList = id => {
		setInquiries(currentInquiries => currentInquiries.filter(inquiry => inquiry._id !== id));
	};

	return (
		<StyledInquiryList>
			{inquiries.length > 0 ? (
				inquiries.map(inquiry => (
					<InquiryItem
						key={inquiry._id}
						inquiry={inquiry}
						toggleContent={toggleContent}
						deleteInquiryFromList={deleteInquiryFromList}
					/>
				))
			) : (
				<EmptyMessage>문의 내역이 없습니다</EmptyMessage>
			)}
		</StyledInquiryList>
	);
}

export default InquiryList;
