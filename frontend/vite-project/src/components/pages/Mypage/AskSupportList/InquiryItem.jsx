import React from 'react';
import axios from 'axios';
import { InquiryItem as StyledInquiryItem, Content, ActionContainer } from './AskSupportListStyles';
import DeleteButton from './DeleteButton';
import ToggleContentButton from './ToggleContentButton';
import InquiryStatus from './InquiryStatus';

function InquiryItem({ inquiry, toggleContent, deleteInquiry }) {
	function handleDelete(inquiryId) {
		axios
			.delete(`/api/qna/${inquiryId}`)
			.then(() => {
				deleteInquiry(inquiryId);
				alert('문의가 성공적으로 삭제되었습니다.');
			})
			.catch(error => {
				console.error('Failed to delete the inquiry:', error);
				alert('문의 삭제에 실패했습니다.');
			});
	}

	const { id, title, content, status, show } = inquiry;

	return (
		<StyledInquiryItem>
			<div>
				<ToggleContentButton onClick={() => toggleContent(id)} title={title} />
				<Content show={show}>{content}</Content>
			</div>
			<ActionContainer>
				<InquiryStatus status={status} />
				<DeleteButton onClick={() => handleDelete(id)} />
			</ActionContainer>
		</StyledInquiryItem>
	);
}

export default InquiryItem;
