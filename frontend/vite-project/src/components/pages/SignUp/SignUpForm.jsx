import React, { useState } from 'react';
import axios from 'axios';
import UniversityModal from './UniversityModal';
import {
	ProfileWrapper,
	ProfileImage,
	IconWrapper,
	HiddenFileInput,
	IconImage,
	Form,
	Input,
	Button,
	InlineGroup,
	StyledInput,
	SmallButton,
	InputWithIcon,
	SearchInput,
	InputIcon,
} from '../../../components/Users/UsersStyles';

const ProfileImageUploader = ({ onImageSelected }) => {
	const [preview, setPreview] = useState('/logoCharacter.png');

	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
			setPreview(URL.createObjectURL(file));
			onImageSelected(file);
		}
	};

	return (
		<ProfileWrapper>
			<ProfileImage src={preview} alt="Profile" />
			<HiddenFileInput
				type="file"
				accept="image/*"
				onChange={handleImageChange}
				id="profile-image-upload"
			/>
			<IconWrapper htmlFor="profile-image-upload">
				<IconImage src="/photo.svg" alt="Upload" />
			</IconWrapper>
		</ProfileWrapper>
	);
};

const ProfileForm = ({
	onSubmit,
	userId,
	setUserId,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	name,
	setName,
	email,
	setEmail,
	emailVerificationCode,
	setEmailVerificationCode,
	onVerifyEmail,
	nickname,
	setNickname,
	university,
	setUniversity,
	onSearchUniversity,
}) => {
	return (
		<Form onSubmit={onSubmit}>
			<Input
				type="text"
				placeholder="*아이디를 입력해주세요"
				value={userId}
				onChange={e => setUserId(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="*비밀번호를 입력해주세요"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="*비밀번호를 다시 입력해주세요"
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="*이름을 입력해주세요"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<InlineGroup>
				<StyledInput
					type="email"
					placeholder="*이메일을 입력해주세요"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<SmallButton type="button" onClick={onVerifyEmail}>
					인증요청
				</SmallButton>
			</InlineGroup>
			<InlineGroup>
				<StyledInput
					type="text"
					placeholder="인증번호를 입력해주세요"
					value={emailVerificationCode}
					onChange={e => setEmailVerificationCode(e.target.value)}
				/>
				<SmallButton type="button" onClick={onVerifyEmail}>
					인증확인
				</SmallButton>
			</InlineGroup>
			<Input
				type="text"
				placeholder="*닉네임을 입력해주세요"
				value={nickname}
				onChange={e => setNickname(e.target.value)}
			/>
			<InputWithIcon>
				<SearchInput
					type="text"
					placeholder="대학명을 입력해주세요"
					value={university}
					onChange={e => setUniversity(e.target.value)}
				/>
				<InputIcon src="/ReadingGlasses.svg" alt="Search" onClick={onSearchUniversity} />
			</InputWithIcon>
			<Button type="submit">회원가입하기</Button>
		</Form>
	);
};

const SignUpForm = () => {
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

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleSelectUniversity = selectedUniversity => {
		setUniversity(selectedUniversity);
		handleCloseModal();
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('userId', userId);
		formData.append('password', password);
		if (profileImage) {
			formData.append('profileImage', profileImage);
		}

		try {
			const response = await axios.post('/api/members/signUp', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log('회원가입 성공:', response.data);
		} catch (error) {
			console.error('회원가입 실패:', error);
		}
	};

	const handleVerifyEmail = async () => {
		// 이메일 인증 로직 구현
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
				onSubmit={handleSubmit}
				userId={userId}
				setUserId={setUserId}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				emailVerificationCode={emailVerificationCode}
				setEmailVerificationCode={setEmailVerificationCode}
				onVerifyEmail={handleVerifyEmail}
				nickname={nickname}
				setNickname={setNickname}
				university={university}
				setUniversity={setUniversity}
				onSearchUniversity={handleOpenModal}
			/>
		</>
	);
};

export default SignUpForm;
