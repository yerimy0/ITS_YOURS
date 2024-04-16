import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InquiryItem as StyledInquiryItem, Content, ActionContainer } from './AskSupportListStyles';
import DeleteButton from './DeleteButton';
import ToggleContentButton from './ToggleContentButton';
import InquiryStatus from './InquiryStatus';
import { deleteInquiry } from '../../../../apis/service/AskSupportApi';

function InquiryItem({ inquiry, toggleContent, deleteInquiryFromList }) {
	const navigate = useNavigate();
	const { _id, title, content, status, show } = inquiry;

	async function handleDelete() {
		if (!_id) {
			console.error('Error: The inquiry ID is undefined or invalid.');
			alert('문의 삭제에 실패했습니다. 유효하지 않은 문의 ID입니다.');
			return;
		}

		try {
			await deleteInquiry(_id);
			alert('문의가 성공적으로 삭제되었습니다.');
			deleteInquiryFromList(_id);
			navigate('/asksupportlist');
		} catch (error) {
			console.error('Failed to delete the inquiry:', error);
			alert('문의 삭제에 실패했습니다.');
		}
	}

	return (
		<StyledInquiryItem>
			<div>
				<ToggleContentButton onClick={() => toggleContent(_id)} title={title} />
				<Content show={show}>{content}</Content>
			</div>
			<ActionContainer>
				<InquiryStatus status={status} />
				<DeleteButton onClick={handleDelete} />
			</ActionContainer>
		</StyledInquiryItem>
	);
}

export default InquiryItem;
