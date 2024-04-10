import axios from 'axios';

export const loginApi = async (userId, password) => {
	try {
		const response = await axios.post('http://example.com/api/authenticate', {
			userId,
			password,
		});
		const { token } = response.data;
		return { token, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error.response.data };
	}
};
