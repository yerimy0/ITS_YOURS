import React, { createContext, useContext, useState } from 'react';

const ValidationContext = createContext();

export const useValidationContext = () => useContext(ValidationContext);

const ValidationProvider = ({ children }) => {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});

	// 각 필드의 onBlur 이벤트에 대응하는 함수
	const onBlur = e => {
		const { name, value } = e.target;
		let error = '';

		switch (name) {
			case 'userId':
				error = validateId(value);
				break;
			case 'password':
				error = validatePassword(value);
				break;
			case 'passwordConfirm':
				error = validatePasswordConfirm(formData.password, value);
				break;
			case 'name':
				error = validateName(value);
				break;
			case 'email':
				error = validateEmail(value);
				// 이메일 고유성 검사는 서버 요청을 필요로 할 수 있습니다. 예시는 생략합니다.
				break;
			case 'nickname':
				error = validateNickname(value);
				break;
			case 'university':
				// 대학명 검사 로직 (선택 필드는 유효성 검사가 달라질 수 있습니다.)
				break;
			case 'phoneNumber':
				error = validatePhoneNumber(value);
				break;
			// 기타 필드 검사 추가...
			default:
				break;
		}

		setErrors(prev => ({ ...prev, [name]: error }));
	};

	const contextValue = {
		formData,
		setFormData,
		errors,
		onBlur,
		// onSubmit 로직 추가 가능...
	};

	return <ValidationContext.Provider value={contextValue}>{children}</ValidationContext.Provider>;
};

export default ValidationProvider;

// 아래는 각 유효성 검사 함수의 예시입니다.
const validateId = id => {
	if (!/^[a-zA-Z0-9]{5,20}$/.test(id)) {
		return '아이디는 영문자와 숫자만 사용할 수 있으며, 5자 이상 20자 이하로 설정해 주세요.';
	}
	return '';
};

const validatePassword = password => {
	if (!/^(?=.*[!@#$%^&*]).{8,16}$/.test(password)) {
		return '비밀번호는 8자 이상 16자 이하이며, 최소 하나의 특수 문자가 포함되어야 합니다.';
	}
	return '';
};

const validatePasswordConfirm = (password, passwordConfirm) => {
	if (password !== passwordConfirm) {
		return '비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 입력해 주세요.';
	}
	return '';
};

const validateName = name => {
	if (!/^[a-zA-Z가-힣]+$/.test(name)) {
		return '이름은 영문자와 한글만 사용할 수 있습니다.';
	}
	return '';
};

const validateEmail = email => {
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return '유효하지 않은 이메일 형식입니다.';
	}
	return '';
};

const validateNickname = nickname => {
	if (
		!/^[^\s!@#$%^&*()_+={}\[\]:;"'<>,.?\/~`\\|-]+$/.test(nickname) ||
		nickname.length < 2 ||
		nickname.length > 10
	) {
		return '닉네임에는 특수 문자를 사용할 수 없으며, 2자 이상 10자 이하로 설정해 주세요.';
	}
	return '';
};

const validatePhoneNumber = phoneNumber => {
	if (!/^\d+$/.test(phoneNumber)) {
		return '휴대전화 번호는 숫자만 사용할 수 있습니다.';
	}
	return '';
};
