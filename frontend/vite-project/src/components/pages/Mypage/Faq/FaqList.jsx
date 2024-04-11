import React from 'react';
import FaqItem from './FaqItem';
import { StyledFaqList } from './FaqStyles';
import faqData from './FaqData'; // FaqData 파일의 경로를 확인하고 맞게 수정해주세요.

const FaqList = () => {
	return (
		<StyledFaqList>
			{faqData.map(inquiry => (
				<FaqItem key={inquiry.id} question={inquiry.question} answer={inquiry.answer} />
			))}
		</StyledFaqList>
	);
};

export default FaqList;
