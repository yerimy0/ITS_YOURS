import React from 'react';
import { Form, Input, ErrorMessage } from './UsersStyles';

function ProfileForm({
	userId,
	setUserId,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	name,
	setName,
	nickname,
	setNickname,
	userIdError,
	passwordError,
	confirmPasswordError,
	nameError,
	nicknameError,
	handleBlurUserId,
	handleBlurPassword,
	handleBlurConfirmPassword,
	handleBlurName,
	handleBlurNickname,
}) {
	return (
		<Form>
			<Input
				type="text"
				placeholder="*아이디를 입력해주세요"
				value={userId}
				onChange={e => setUserId(e.target.value)}
				onBlur={handleBlurUserId}
			/>
			{userIdError && <ErrorMessage>{userIdError}</ErrorMessage>}
			<Input
				type="password"
				placeholder="*비밀번호를 입력해주세요"
				value={password}
				onChange={e => setPassword(e.target.value)}
				onBlur={handleBlurPassword}
			/>
			{passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
			<Input
				type="password"
				placeholder="*비밀번호를 다시 입력해주세요"
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
				onBlur={handleBlurConfirmPassword}
			/>
			{confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
			<Input
				type="text"
				placeholder="*이름을 입력해주세요"
				value={name}
				onChange={e => setName(e.target.value)}
				onBlur={handleBlurName}
			/>
			{nameError && <ErrorMessage>{nameError}</ErrorMessage>}
			<Input
				type="text"
				placeholder="*닉네임을 입력해주세요"
				value={nickname}
				onChange={e => setNickname(e.target.value)}
				onBlur={handleBlurNickname}
			/>
			{nicknameError && <ErrorMessage>{nicknameError}</ErrorMessage>}
		</Form>
	);
}

export default ProfileForm;
