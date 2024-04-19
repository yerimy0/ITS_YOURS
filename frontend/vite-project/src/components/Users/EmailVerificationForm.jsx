import React from 'react';
import { InlineGroup, StyledInput, SmallButton, EmailErrorMessage } from './UsersStyles';
import { sendVerifyEmail, verifyCode } from '../../apis/service/EmailVerificationForm';

function EmailVerificationForm({
	email,
	setEmail,
	emailVerificationCode,
	setEmailVerificationCode,
	emailError,
	setEmailVerified,
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
			// 서버로부터의 응답을 확인합니다.
			if (response.isVerified) {
				alert('이메일 인증 성공!');
				setEmailVerified(true); // 이메일 인증 상태 업데이트
			} else {
				// 응답에 오류 메시지가 포함되어 있다면 사용자에게 알립니다.
				const errorMessage = response.error || '인증 실패';
				alert(errorMessage);
				setEmailVerified(false); // 인증 실패 시 상태 초기화
			}
		} catch (error) {
			console.error('Axios error:', error);
			if (error.response) {
				// 서버 응답 오류가 있는 경우
				const serverError = error.response.data.error || '서버 응답 오류';
				alert(serverError);
			} else if (error.request) {
				// 요청이 전송되었지만 응답을 받지 못한 경우
				alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
			} else {
				// 기타 오류
				alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.');
			}
			setEmailVerified(false); // 오류 발생 시 상태 초기화
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
