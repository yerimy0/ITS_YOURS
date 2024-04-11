import React, { useState } from 'react';
import axios from 'axios';
import ProfileForm from '../../Users/ProfileForm';
import ProfileImageUploader from '../../Users/ProfileImageUploader';

const SignUpForm = () => {
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('userId', userId);
		formData.append('password', password);
		if (profileImage) {
			formData.append('profileImage', profileImage);
		}

		try {
			// 서버에 회원가입 요청을 보내는 코드를 여기에 추가하세요.
			const response = await axios.post('/api/members/signUp', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			// 응답 처리 로직
			console.log('회원가입 성공:', response.data);
		} catch (error) {
			// 에러 처리 로직
			console.error('회원가입 실패:', error);
		}
	};

	return (
		<>
			<ProfileImageUploader onImageSelected={setProfileImage} />
			<ProfileForm
				inputPlaceholder1="아이디를 입력하세요"
				inputPlaceholder2="비밀번호를 입력하세요"
				buttonText="회원가입하기"
				onSubmit={handleSubmit}
				setInput1={setUserId}
				setInput2={setPassword}
			/>
		</>
	);
};

export default SignUpForm;
