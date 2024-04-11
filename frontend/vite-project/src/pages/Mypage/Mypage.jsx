import React from 'react';
import {
	PageContainer,
	ProfileSection,
	LeftSection,
	RightSection,
} from '../../components/pages/Mypage/Main/ProfileStyles';
import ProfileHeader from '../../components/pages/Mypage/Main/ProfileHeader';
import InfoBoxItem from '../../components/pages/Mypage/Main/InfoBoxItem';
import ProfilePicture from '../../components/pages/Mypage/Main/ProfilePicture';
import NavigationButton from '../../components/pages/Mypage/Main/NavigationButton';

function MyPage({ likes, bookmarks, profilePictureUrl }) {
	return (
		<PageContainer>
			<ProfileSection>
				<LeftSection>
					<ProfileHeader userName="임예림" />
					<InfoBoxItem likes={35} bookmarks={27} />
				</LeftSection>
				<RightSection>
					<ProfilePicture imageUrl={profilePictureUrl} />
				</RightSection>
			</ProfileSection>
			<NavigationButton />
		</PageContainer>
	);
}

export default MyPage;
