// ValidationService.js
export const validateUserId = userId => {
	if (!userId.trim()) {
		return '아이디를 입력해주세요.';
	} else if (!/^[a-zA-Z0-9]+$/.test(userId)) {
		return '아이디는 영문자와 숫자만 사용할 수 있습니다.';
	} else if (userId.length < 5 || userId.length > 20) {
		return '아이디는 5자 이상, 20자 이하로 설정해 주세요.';
	}
	// 고유성 검사는 API 호출로 처리해야 하므로 여기서는 구현하지 않습니다.
	return '';
};

export const validatePassword = password => {
	if (!password) {
		return '비밀번호를 입력해주세요.';
	} else if (password.length < 8 || password.length > 16) {
		return '비밀번호는 8자 이상 16자 이하로 설정해 주세요.';
	} else if (!/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
		return '비밀번호에는 최소 하나의 특수 문자가 포함되어야 합니다.';
	}
	return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
	if (password !== confirmPassword) {
		return '비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 입력해 주세요.';
	}
	return '';
};

export const validateName = name => {
	if (!name.trim()) {
		return '이름을 입력해주세요.';
	} else if (!/^[a-zA-Z가-힣]+$/.test(name)) {
		return '이름은 영문자와 한글만 사용할 수 있습니다.';
	}
	return '';
};

export const validateEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return '유효하지 않은 이메일 형식입니다.';
	}
	// 고유성 검사는 API 호출로 처리해야 하므로 여기서는 구현하지 않습니다.
	return '';
};

export const validateNickname = nickname => {
	if (nickname.length < 2 || nickname.length > 10) {
		return '닉네임은 2자 이상 10자 이하로 설정해 주세요.';
	} else if (/[^a-zA-Z0-9가-힣]/.test(nickname)) {
		return '닉네임에는 특수 문자를 사용할 수 없습니다.';
	}
	// 고유성 검사는 API 호출로 처리해야 하므로 여기서는 구현하지 않습니다.
	return '';
};

export const validateUniversity = university => {
	if (!university) {
		return '대학명을 선택하거나 입력해주세요.';
	}
	return '';
};
