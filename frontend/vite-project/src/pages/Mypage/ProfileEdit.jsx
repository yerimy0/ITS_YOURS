// ProfileEdit.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SignOutLink } from '../../components/pages/SignOut/SignOutStyles';
import { Wrapper, Title } from '../../components/Users/UsersStyles';
import ProfileEditForm from '../../components/pages/Mypage/ProfileEditForm';
import SignOutModal from '../../components/pages/SignOut/SignOutModal';

function ProfileEdit() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const response = await axios.get('/api/members/me');
				setUserInfo(response.data);
			} catch (error) {
				console.error('사용자 정보 불러오기 실패:', error);
			}
		};

		fetchUserInfo();
	}, []);

	return (
		<Wrapper>
			<Title>개인정보수정</Title>
			<ProfileEditForm userInfo={userInfo} />
			<SignOutLink onClick={openModal}>탈퇴하기</SignOutLink>
			<SignOutModal isOpen={isModalOpen} onClose={closeModal} />
		</Wrapper>
	);
}

export default ProfileEdit;
