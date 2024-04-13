import React from 'react';
import { Form, Input } from '../../../components/Users/UsersStyles';

const ProfileForm = ({
	userId,
	setUserId,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	name,
	setName,
	nickname,
	setNickname, // 닉네임 상태 업데이트 함수를 props로 받음
	onChange,
}) => (
	<Form onChange={onChange}>
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
		<Input
			type="text"
			placeholder="*닉네임을 입력해주세요"
			value={nickname}
			onChange={e => setNickname(e.target.value)}
		/>
	</Form>
);

export default ProfileForm;
