import React, { useState } from 'react';
import UniversityModal from '../../Users/University/UniversityModal';
import ProfileImageUploader from '../../../components/Users/ProfileImageUploader';
import { signUpApi } from '../../../apis/service/SignUpApi';
import ProfileForm from '../../Users/ProfileForm';
import EmailVerificationForm from '../../Users/EmailVerificationForm';
import UniversitySearchForm from '../../Users/University/UniversitySearchForm';
import { Button } from '../../../components/Users/UsersStyles';
import {
	validateUserId,
	validatePassword,
	validateConfirmPassword,
	validateName,
	validateEmail,
	validateNickname,
	validateUniversity,
} from '../../Users/ValidationService';

function SignUpForm() {
	const [profileImage, setProfileImage] = useState(null);
	const [userId, setUserId] = useState('');
	const [userIdError, setUserIdError] = useState('');
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [emailVerificationCode, setEmailVerificationCode] = useState('');
	const [nickname, setNickname] = useState('');
	const [nicknameError, setNicknameError] = useState('');
	const [university, setUniversity] = useState('');
	const [universityError, setUniversityError] = useState('');
	const [isModalOpen, setModalOpen] = useState(false);

	const handleBlurUserId = () => setUserIdError(validateUserId(userId));
	const handleBlurPassword = () => setPasswordError(validatePassword(password));
	const handleBlurConfirmPassword = () =>
		setConfirmPasswordError(validateConfirmPassword(password, confirmPassword));
	const handleBlurName = () => setNameError(validateName(name));
	const handleBlurEmail = () => setEmailError(validateEmail(email));
	const handleBlurNickname = () => setNicknameError(validateNickname(nickname));

	const handleSelectUniversity = selectedUniversity => {
		setUniversity(selectedUniversity);
		setUniversityError(validateUniversity(selectedUniversity));
		handleCloseModal();
	};

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	const handleSubmit = async event => {
		event.preventDefault();
		// Validate all fields before submitting
		handleBlurUserId();
		handleBlurPassword();
		handleBlurConfirmPassword();
		handleBlurName();
		handleBlurEmail();
		handleBlurNickname();
		handleSelectUniversity(university); // This might not be necessary here, re-validate on modal selection

		if (
			!userIdError &&
			!passwordError &&
			!confirmPasswordError &&
			!nameError &&
			!emailError &&
			!nicknameError &&
			!universityError
		) {
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
		} else {
			console.error('Validation errors:', {
				userIdError,
				passwordError,
				confirmPasswordError,
				nameError,
				emailError,
				nicknameError,
				universityError,
			});
		}
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
				userIdError={userIdError}
				passwordError={passwordError}
				confirmPasswordError={confirmPasswordError}
				nameError={nameError}
				nicknameError={nicknameError}
				handleBlurUserId={handleBlurUserId}
				handleBlurPassword={handleBlurPassword}
				handleBlurConfirmPassword={handleBlurConfirmPassword}
				handleBlurName={handleBlurName}
				handleBlurNickname={handleBlurNickname}
			/>
			<EmailVerificationForm
				email={email}
				setEmail={setEmail}
				emailVerificationCode={emailVerificationCode}
				setEmailVerificationCode={setEmailVerificationCode}
				emailError={emailError}
				handleBlurEmail={handleBlurEmail}
			/>
			<UniversitySearchForm
				university={university}
				setUniversity={setUniversity}
				universityError={universityError}
				onSearchUniversity={handleOpenModal}
			/>
			<Button type="submit" onClick={handleSubmit}>
				회원가입하기
			</Button>
		</>
	);
}

export default SignUpForm;
