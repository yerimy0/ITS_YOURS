import React from 'react';
import { LikeAndBookmark, InfoBox, TextContainer, Label, Value } from './ProfileStyles';
import { useNavigate } from 'react-router-dom';

function InfoBoxItem({ likes, bookmarks }) {
	const navigate = useNavigate();
	const navigateToBookmarks = () => {
		navigate('/mypage/wish');
	};

	return (
		<LikeAndBookmark>
			<InfoBox backgroundImage="/thumbsup.png">
				<TextContainer>
					<Label>좋아요</Label>
					<Value>{likes}</Value>
				</TextContainer>
			</InfoBox>
			<InfoBox backgroundImage="/wishheart.png" onClick={navigateToBookmarks}>
				<TextContainer>
					<Label>찜</Label>
					<Value>{bookmarks}</Value>
				</TextContainer>
			</InfoBox>
		</LikeAndBookmark>
	);
}

export default InfoBoxItem;
