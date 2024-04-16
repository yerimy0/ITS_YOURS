import instance from '../axiosInstance';

const loginApi = async (userId, password) => {
	try {
		const response = await instance.post('/members/login', { id: userId, password });
		console.log(response);
		const { accessToken } = response.data;
		return { accessToken, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error };
	}
};

const validateToken = async token => {
	try {
		const response = await instance.post('/members/validate', { token });
		return response.data.isValid; // 백엔드가 이 필드를 제공한다고 가정
	} catch (error) {
		console.error('토큰 검증 실패:', error);
		return false;
	}
};

export { loginApi, validateToken };
