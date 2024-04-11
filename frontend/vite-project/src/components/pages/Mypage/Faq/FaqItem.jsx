import React, { useState } from 'react';
import { StyledFaqItem } from './FaqStyles';

const FaqItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<StyledFaqItem className="faq-item">
			<div className="faq-question" onClick={toggle}>
				{question}
				<button className="toggle-answer">
					<img src="public/PlusIcon.svg" alt="Toggle Answer" />
				</button>
			</div>
			{isOpen && <div className="faq-answer">{answer}</div>}
		</StyledFaqItem>
	);
};
export default FaqItem;
