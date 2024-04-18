import React from 'react';
import { Status } from './AskSupportListStyles';

function InquiryStatus({ isCompleted }) {
	return <Status>{isCompleted ? '처리완료' : '처리중'}</Status>;
}

export default InquiryStatus;
