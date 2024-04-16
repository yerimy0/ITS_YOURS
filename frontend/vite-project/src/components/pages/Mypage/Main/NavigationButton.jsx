import React, { useContext } from 'react';
import { FlexColumn, StyledButton, ButtonContent, StyledArrowIcon } from './ProfileStyles';
import { useNavigate } from 'react-router-dom';
import UserIdContext from '../../../../context/UserIdContext';

function NavigationButton() {
	const navigate = useNavigate();
	const { id } = useContext(UserIdContext);

	return (
		<FlexColumn>
			<StyledButton onClick={() => navigate(`/saleshistory/${id}`)}>
				<ButtonContent>💰 판매내역</ButtonContent>
				<StyledArrowIcon as="img" src="/ArrowIcon.svg" />
			</StyledButton>
			<StyledButton onClick={() => navigate(`/purchasehistory/${id}`)}>
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
