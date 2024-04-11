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
import { fetchMyPageData } from '../../apis/service/mypagemenu.api';

function MyPage() {
	// 상태를 초기화합니다.
	const [userData, setUserData] = useState({
		userName: '', // 사용자 이름
		likes: 0, // 좋아요 수
		bookmarks: 0, // 북마크 수
		profilePictureUrl: '', // 프로필 사진 URL
	});

	// 컴포넌트가 마운트될 때 데이터를 불러옵니다.
	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await fetchMyPageData();
				setUserData({
					userName: data.realName,
					likes: data.likes,
					bookmarks: data.bookmarks,
					profilePictureUrl: data.profilePic,
				});
			} catch (error) {
				console.error('Failed to fetch data:', error);
			}
		};

		loadData();
	}, []);

	// 로딩된 데이터로 UI를 구성합니다.
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
