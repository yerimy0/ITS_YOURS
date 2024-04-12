import React from 'react';
import { Title, UserName, SubTitle } from './FaqStyles';

const FAQTitle = ({ user, title, subtitle }) => {
	// subtitle에서 줄바꿈을 처리하는 함수, 매번 split을 호출하지 않도록 최적화
	const renderSubtitle = subtitle => {
		const lines = subtitle.split('\n');
		return lines.map((line, index) => (
			<React.Fragment key={index}>
				{line}
				{index < lines.length - 1 && <br />}
			</React.Fragment>
		));
	};

	return (
		<Title>
			{title ? (
				<>
					<div>{title}</div>
					{subtitle && <SubTitle>{renderSubtitle(subtitle)}</SubTitle>}
				</>
			) : (
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
