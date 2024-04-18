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
			const response = await verifyCode(email, emailVerificationCode);
			if (!response || !response.data) {
				throw new Error('No response data received');
			}
			console.log('Server response:', response.data);
			if (response.data.verified) {
				alert('이메일 인증 성공!');
			} else {
				alert(response.data.error || '인증 실패');
			}
		} catch (error) {
			console.error('Axios error:', error);
			if (error.response) {
				// 서버 응답 오류
				alert(`서버 응답 오류: ${error.response.data.error}`);
			} else if (error.request) {
				// 네트워크 오류
				alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
			} else {
				// 기타 오류
				alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.');
			}
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
