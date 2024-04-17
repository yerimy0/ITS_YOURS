import React from 'react';
import { InlineGroup, StyledInput, SmallButton, EmailErrorMessage } from './UsersStyles';

function EmailVerificationForm({
	email,
	setEmail,
	emailVerificationCode,
	setEmailVerificationCode,
	onVerifyEmail,
	emailError,
	handleBlurEmail,
}) {
	return (
		<>
			<InlineGroup>
				<div className="inline_wrap">
					<StyledInput
						type="email"
						placeholder="*이메일을 입력해주세요"
						value={email}
						onChange={e => setEmail(e.target.value)}
						onBlur={handleBlurEmail}
					/>
					<SmallButton type="button" onClick={() => onVerifyEmail(email)}>
						인증요청
					</SmallButton>
				</div>
			</InlineGroup>
			{emailError && <EmailErrorMessage>{emailError}</EmailErrorMessage>}
			<InlineGroup>
				<div className="inline_wrap">
					<StyledInput
						type="text"
						placeholder="인증번호를 입력해주세요"
						value={emailVerificationCode}
						onChange={e => setEmailVerificationCode(e.target.value)}
					/>
					<SmallButton type="button" onClick={onVerifyEmail}>
						인증확인
					</SmallButton>
				</div>
			</InlineGroup>
		</>
	);
}

export default EmailVerificationForm;
