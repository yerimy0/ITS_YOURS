import React from 'react';
import { FlexColumn, StyledButton, ButtonContent, StyledArrowIcon } from './ProfileStyles';
import { useNavigate } from 'react-router-dom';

function NavigationButton() {
	const navigate = useNavigate();

	return (
		<FlexColumn>
			<StyledButton onClick={() => navigate('/saleshistory')}>
				<ButtonContent>💰 판매내역</ButtonContent>
				<StyledArrowIcon as="img" src="/ArrowIcon.svg" />
			</StyledButton>
			<StyledButton onClick={() => navigate('/saleshistory')}>
				<ButtonContent>📘 구매내역</ButtonContent>
				<StyledArrowIcon as="img" src="/ArrowIcon.svg" />
			</StyledButton>
			<StyledButton onClick={() => navigate('/faq')}>
				<ButtonContent>❓ 자주 묻는 질문</ButtonContent>
				<StyledArrowIcon as="img" src="/ArrowIcon.svg" />
			</StyledButton>
		</FlexColumn>
	);
}

export default NavigationButton;
