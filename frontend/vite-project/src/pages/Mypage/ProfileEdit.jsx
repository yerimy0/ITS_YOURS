import React, { useState } from 'react';
import { Wrapper, Title, SignOutLink } from '../../components/pages/Mypage/ProfileEditFormStyles';
import ProfileEditForm from '../../components/pages/Mypage/ProfileEditForm';
import SignOutModal from '../../components/pages/SignOut/SignOutModal';

function ProfileEdit() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<Wrapper>
			<Title>개인정보수정</Title>
			<ProfileEditForm userInfo={null} />
			<SignOutLink className="user_out" onClick={openModal}>
				탈퇴하기
			</SignOutLink>
			<SignOutModal isOpen={isModalOpen} onClose={closeModal} />
		</Wrapper>
	);
}

export default ProfileEdit;
