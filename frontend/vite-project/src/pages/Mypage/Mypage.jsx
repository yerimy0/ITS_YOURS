import React, { useEffect, useState } from 'react';
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
import { fetchMyPageData } from '../../apis/service/MyPageMenuApi';

function MyPage() {
	const [userData, setUserData] = useState({
		userName: '',
		likes: 0,
		bookmarks: 0,
		profilePictureUrl: '',
	});

	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await fetchMyPageData();
				setUserData({
					userName: data.nickName,
					likes: data.likeCount,
					bookmarks: data.wishesCount,
					profilePictureUrl: data.profilePic,
				});
			} catch (error) {
				console.error('Failed to fetch data:', error);
			}
		};

		loadData();
	}, []);

	return (
		<PageContainer>
			<ProfileSection>
				<LeftSection>
					<ProfileHeader userName={userData.userName} />
					<InfoBoxItem likes={userData.likes} bookmarks={userData.bookmarks} />
				</LeftSection>
				<RightSection>
					<ProfilePicture imageUrl={userData.profilePictureUrl} />
				</RightSection>
			</ProfileSection>
			<NavigationButton />
		</PageContainer>
	);
}

export default MyPage;
