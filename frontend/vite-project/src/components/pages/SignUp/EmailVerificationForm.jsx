import React from 'react';
import { InlineGroup, StyledInput, SmallButton } from '../../../components/Users/UsersStyles';

const EmailVerificationForm = ({
	email,
	setEmail,
	emailVerificationCode,
	setEmailVerificationCode,
	onVerifyEmail,
}) => (
	<>
		<InlineGroup>
			<StyledInput
				type="email"
				placeholder="*이메일을 입력해주세요"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<SmallButton type="button" onClick={() => onVerifyEmail(email)}>
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
	</>
);

export default EmailVerificationForm;
