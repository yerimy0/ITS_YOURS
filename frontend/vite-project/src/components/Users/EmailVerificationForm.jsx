import React from 'react';
import { InlineGroup, StyledInput, SmallButton, EmailErrorMessage } from './UsersStyles';
import { sendVerifyEmail, verifyCode } from '../../apis/service/EmailVerificationForm';

function EmailVerificationForm({
	email,
	setEmail,
	emailVerificationCode,
	setEmailVerificationCode,
	emailError,
	handleBlurEmail,
}) {
	const handleSendVerifyEmail = async () => {
		try {
			await sendVerifyEmail(email);
			alert('인증번호가 전송되었습니다.');
		} catch (error) {
			alert('인증번호 전송 실패');
		}
	};

	const handleVerifyCode = async () => {
		try {
			const result = await verifyCode(email, emailVerificationCode);
			if (result.success) {
				alert('이메일 인증 성공!');
			} else {
				alert('인증번호가 일치하지 않습니다.');
			}
		} catch (error) {
			alert('인증 실패');
		}
	};

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
					<SmallButton type="button" onClick={handleSendVerifyEmail}>
						인증요청
					</SmallButton>
				</div>
				{emailError && <EmailErrorMessage>{emailError}</EmailErrorMessage>}
			</InlineGroup>

			<InlineGroup>
				<div className="inline_wrap">
					<StyledInput
						type="text"
						placeholder="인증번호를 입력해주세요"
						value={emailVerificationCode}
						onChange={e => setEmailVerificationCode(e.target.value)}
					/>
					<SmallButton type="button" onClick={handleVerifyCode}>
						인증확인
					</SmallButton>
				</div>
			</InlineGroup>
		</>
	);
}

export default EmailVerificationForm;
