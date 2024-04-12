import React, { useState } from 'react';
import axios from 'axios';
import ProfileImageUploader from '../../Users/ProfileImageUploader';
import { Form, Input, Button } from '../../Users/UsersStyles';

function ProfileEditForm({ userInfo }) {
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState(userInfo?.userId || '');
	const [password, setPassword] = useState('');
	const [name, setName] = useState(userInfo?.name || '');
	const [email, setEmail] = useState(userInfo?.email || '');
	const [phone, setPhone] = useState(userInfo?.phone || '');
	const [university, setUniversity] = useState(userInfo?.university || '');
	const [nickname, setNickname] = useState(userInfo?.nickname || '');

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('userId', userId);
		if (password) {
			formData.append('password', password);
		}
		formData.append('name', name);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('university', university);
		formData.append('nickname', nickname);

		if (profileImage) {
			formData.append('profileImage', profileImage);
		}

		try {
			const response = await axios({
				method: 'put',
				url: '/api/members/me',
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<ProfileImageUploader onImageSelected={setProfileImage} />
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="아이디"
					value={userId}
					onChange={e => setUserId(e.target.value)}
					disabled
				/>
				<Input
					type="password"
					placeholder="비밀번호 (변경할 경우만 입력)"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="이름"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="이메일"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input
					type="tel"
					placeholder="전화번호"
					value={phone}
					onChange={e => setPhone(e.target.value)}
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
