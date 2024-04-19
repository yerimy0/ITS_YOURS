import React from 'react';
import { Title, UserName, SubTitle } from './FaqStyles';

function FAQTitle({ user, title, subtitle }) {
	function renderSubtitle(subtitle) {
		const lines = subtitle.split('\n');
		return lines.map((line, index) => (
			<React.Fragment key={index}>
				{line}
				{index < lines.length - 1 && <br />}
			</React.Fragment>
		));
	}

	return (
		<Title>
			{title ? (
				<>
					<div className="bottom_title">{title}</div>
					{subtitle && <SubTitle className="bottom_sub">{renderSubtitle(subtitle)}</SubTitle>}
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
}

export default FAQTitle;
