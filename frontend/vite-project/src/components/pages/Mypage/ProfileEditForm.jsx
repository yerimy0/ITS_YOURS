import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMyPageData, updateMyPageData } from '../../../apis/service/ProfileEdit';
import ProfileImageUploader from '../../Users/ProfileImageEdit';
import { Form, Input, Button, ErrorMessage } from '../../Users/UsersStyles';
import {
	validateUserId,
	validatePassword,
	validateConfirmPassword,
	validateName,
	validateEmail,
	validateNickname,
	validateUniversity,
} from '../../Users/ValidationService';
import EmailVerificationForm from '../../Users/EmailVerificationForm';
import UniversitySearchForm from '../../Users/University/UniversitySearchForm';
import UniversityModal from '../../Users/University/UniversityModal';

function ProfileEditForm({ userInfo }) {
	const navigate = useNavigate();
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState(userInfo?.userId || '');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [name, setName] = useState(userInfo?.name || '');
	const [email, setEmail] = useState(userInfo?.email || '');
	const [university, setUniversity] = useState(userInfo?.university || '');
	const [nickname, setNickname] = useState(userInfo?.nickname || '');
	const [errors, setErrors] = useState({});
	const [emailVerificationCode, setEmailVerificationCode] = useState('');
	const [isEmailVerified, setEmailVerified] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		fetchProfileData();
	}, []);

	const fetchProfileData = async () => {
		try {
			const data = await fetchMyPageData();
			console.log('Received data:', data);
			setUserId(data.id);
			setName(data.realName);
			setEmail(data.email);
			setUniversity(data.schoolName);
			setNickname(data.nickName);
			setProfileImage(data.profilePic);
		} catch (error) {
			console.error('프로필 정보 로딩 실패:', error);
		}
	};

	const handleValidation = () => {
		const newErrors = {
			userId: validateUserId(userId),
			password: validatePassword(password),
			confirmPassword: validateConfirmPassword(password, confirmPassword),
			name: validateName(name),
			email: validateEmail(email),
			university: validateUniversity(university),
			nickname: validateNickname(nickname),
		};
		setErrors(newErrors);
		return Object.values(newErrors).every(error => error === '');
	};

	async function handleSubmit(event) {
		event.preventDefault();
		if (!handleValidation()) {
			console.error('유효성 검사 실패:', errors);
			return;
		}

		if (!isEmailVerified) {
			alert('프로필을 업데이트하기 전에 이메일 인증을 완료해주세요.');
			return;
		}

		const formData = new FormData();
		formData.append('userId', userId);
		formData.append('password', password);
		formData.append('realName', name);
		formData.append('email', email);
		formData.append('schoolName', university);
		formData.append('nickName', nickname);
		if (profileImage) {
			formData.append('profilePic', profileImage);
		}

		try {
			const response = await updateMyPageData(formData);
			console.log('프로필 업데이트 완료:', response);
			alert('수정이 완료되었습니다');
			navigate('/mypage'); // 리디렉션
			await fetchProfileData();
		} catch (error) {
			console.error('프로필 업데이트 오류:', error.response ? error.response.data : error);
		}
	}

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);
	const handleSelectUniversity = selectedUniversity => {
		setUniversity(selectedUniversity);
		setErrors(prevErrors => ({ ...prevErrors, university: '' }));
		handleCloseModal();
	};

	return (
		<>
			<UniversityModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSelectUniversity={handleSelectUniversity}
			/>
			<ProfileImageUploader onImageSelected={setProfileImage} initialPreview={profileImage} />
			<Form onSubmit={handleSubmit}>
				<Input type="text" className="my_info_input common_info" value={userId} disabled />
				<Input
					className="my_info_input common_info"
					type="password"
					placeholder="*비밀번호를 입력해주세요"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				{errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
				<Input
					className="my_info_input common_info"
					type="password"
					placeholder="*비밀번호를 다시 입력해주세요"
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
				{errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
				<Input
					className="my_info_input common_info"
					type="text"
					placeholder="*이름을 입력해주세요"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
				<Input
					className="my_info_input common_info"
					type="text"
					placeholder="*닉네임을 입력해주세요"
					value={nickname}
					onChange={e => setNickname(e.target.value)}
				/>
				{errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
				<EmailVerificationForm
					className="common_info"
					email={email}
					setEmail={setEmail}
					emailVerificationCode={emailVerificationCode}
					setEmailVerificationCode={setEmailVerificationCode}
					emailError={errors.email}
					setEmailVerified={setEmailVerified}
				/>
				<UniversitySearchForm
					className="common_info"
					university={university}
					setUniversity={setUniversity}
					universityError={errors.university}
					onSearchUniversity={handleOpenModal}
				/>
				<Button type="submit" className="my_info_button common_info">
					수정하기
				</Button>
			</Form>
		</>
	);
}

export default ProfileEditForm;
