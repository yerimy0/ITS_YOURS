import React from 'react';
import { InquiryItem as StyledInquiryItem, Content, ActionContainer } from './AskSupportListStyles';
import DeleteButton from './DeleteButton';
import ToggleContentButton from './ToggleContentButton';
import InquiryStatus from './InquiryStatus';

function InquiryItem({ inquiry, toggleContent, deleteInquiry }) {
	const { id, title, content, status, show } = inquiry;

	return (
		<StyledInquiryItem>
			<div>
				<ToggleContentButton onClick={() => toggleContent(id)} title={title} />
				<Content show={show}>{content}</Content>
			</div>
			<ActionContainer>
				<InquiryStatus status={status} />
				<DeleteButton onClick={() => deleteInquiry(id)} />
			</ActionContainer>
		</StyledInquiryItem>
	);
}

export default InquiryItem;
