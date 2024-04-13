import React, { useState } from 'react';
import UniversityModal from './UniversityModal';
import ProfileImageUploader from '../../../components/Users/ProfileImageUploader';
import { signUpApi } from '../../../apis/service/SignUpApi';
import ProfileForm from './ProfileForm';
import EmailVerificationForm from './EmailVerificationForm';
import UniversitySearchForm from './UniversitySearchForm';
import { Button } from '../../../components/Users/UsersStyles';

function SignUpForm() {
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailVerificationCode, setEmailVerificationCode] = useState('');
	const [nickname, setNickname] = useState('');
	const [university, setUniversity] = useState('');
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);
	const handleSelectUniversity = selectedUniversity => {
		setUniversity(selectedUniversity);
		handleCloseModal();
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('id', userId);
		formData.append('password', password);
		formData.append('realName', name);
		formData.append('email', email);
		formData.append('schoolName', university);
		formData.append('nickName', nickname);
		if (profileImage) {
			formData.append('profilePic', profileImage);
		}

		const { data, error } = await signUpApi(formData);
		if (error) {
			console.error('회원가입 실패:', error);
		} else {
			console.log('회원가입 성공:', data);
		}
	};

	const handleVerifyEmail = async () => {
		// 이메일 인증 로직 구현 예정
	};

	return (
		<>
			<UniversityModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSelectUniversity={handleSelectUniversity}
			/>
			<ProfileImageUploader onImageSelected={setProfileImage} />
			<ProfileForm
				userId={userId}
				setUserId={setUserId}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				name={name}
				setName={setName}
				nickname={nickname}
				setNickname={setNickname}
			/>
			<EmailVerificationForm
				email={email}
				setEmail={setEmail}
				emailVerificationCode={emailVerificationCode}
				setEmailVerificationCode={setEmailVerificationCode}
				onVerifyEmail={handleVerifyEmail}
			/>
			<UniversitySearchForm
				university={university}
				setUniversity={setUniversity}
				onSearchUniversity={handleOpenModal}
			/>
			<Button type="submit" onClick={handleSubmit}>
				회원가입하기
			</Button>
		</>
	);
}

export default SignUpForm;
