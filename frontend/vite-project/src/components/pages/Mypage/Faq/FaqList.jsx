import React from 'react';
import FaqItem from './FaqItem';
import { StyledFaqList } from './FaqStyles';
import faqData from './FaqData';

function FaqList() {
	return (
		<StyledFaqList>
			{faqData.map(inquiry => (
				<FaqItem key={inquiry.id} question={inquiry.question} answer={inquiry.answer} />
			))}
		</StyledFaqList>
	);
}

export default FaqList;
