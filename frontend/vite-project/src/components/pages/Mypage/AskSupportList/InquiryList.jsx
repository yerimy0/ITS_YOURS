import React from 'react';
import InquiryItem from './InquiryItem';
import { InquiryList as StyledInquiryList } from './AskSupportListStyles';

function InquiryList({ inquiries, toggleContent, deleteInquiry }) {
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
