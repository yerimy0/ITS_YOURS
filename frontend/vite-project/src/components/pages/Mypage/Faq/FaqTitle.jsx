import React from 'react';
import { Title, UserName, SubTitle } from './FaqStyles';

const FAQTitle = ({ user, title, subtitle }) => {
	// subtitle에서 줄바꿈을 처리하는 함수
	const renderSubtitle = subtitle =>
		subtitle.split('\n').map((line, index) => (
			<React.Fragment key={index}>
				{line}
				{index < subtitle.split('\n').length - 1 && <br />}
			</React.Fragment>
		));

	return (
		<Title>
			{/* title이 있으면 title과 subtitle 표시, subtitle은 줄바꿈 처리 */}
			{title ? (
				<>
					<div>{title}</div>
					{subtitle && <SubTitle>{renderSubtitle(subtitle)}</SubTitle>}
				</>
			) : (
				// title이 없고 user가 있으면 기본 메시지 표시
				user && (
					<>
						<UserName>{user}님,</UserName>
						<div>무엇을 도와드릴까요?</div>
					</>
				)
			)}
		</Title>
	);
};

export default FAQTitle;
