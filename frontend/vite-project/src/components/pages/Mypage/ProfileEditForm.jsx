import React, { useState, useEffect } from 'react';
import { fetchMyPageData, updateMyPageData } from '../../../apis/service/ProfileEdit';
import ProfileImageUploader from '../../Users/ProfileImageUploader';
import { Form, Input, Button } from '../../Users/UsersStyles';

function ProfileEditForm({ userInfo }) {
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState(userInfo?.userId || '');
	const [password, setPassword] = useState('');
	const [name, setName] = useState(userInfo?.name || '');
	const [email, setEmail] = useState(userInfo?.email || '');
	const [university, setUniversity] = useState(userInfo?.university || '');
	const [nickname, setNickname] = useState(userInfo?.nickname || '');

	useEffect(() => {
		const loadProfileData = async () => {
			try {
				const data = await fetchMyPageData();
				setUserId(data.id);
				setName(data.realName);
				setEmail(data.email);
				setUniversity(data.univName);
				setNickname(data.nickName);
				setProfileImage(data.profilePic);
			} catch (error) {
				console.error('프로필 정보 로딩 실패:', error);
			}
		};

		loadProfileData();
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('userId', userId);
		if (password) {
			formData.append('password', password);
		}
		formData.append('name', name);
		formData.append('email', email);
		formData.append('university', university);
		formData.append('nickname', nickname);

		if (profileImage) {
			formData.append('profileImage', profileImage);
		}

		try {
			const response = await updateMyPageData(formData);
			console.log('Profile Update:', response);
		} catch (error) {
			console.error('프로필 업데이트 오류:', error);
		}
	};

	return (
		<>
			<ProfileImageUploader onImageSelected={setProfileImage} />
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="아이디를 입력하세요"
					value={userId}
					onChange={e => setUserId(e.target.value)}
					disabled
				/>
				<Input
					type="password"
					placeholder="비밀번호를 입력하세요"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="이름을 입력하세요"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="이메일을 입력하세요"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="대학명"
					value={university}
					onChange={e => setUniversity(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="닉네임"
					value={nickname}
					onChange={e => setNickname(e.target.value)}
				/>
				<Button type="submit">수정하기</Button>
			</Form>
		</>
	);
}

export default ProfileEditForm;
