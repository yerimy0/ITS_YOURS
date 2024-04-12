import axios from 'axios';

const loginApi = async (userId, password) => {
	try {
		const response = await axios.post('/api/api/members/login', { id: userId, password });
		console.log(response.data);
		const { accessToken } = response.data;
		return { accessToken, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error.response.data };
	}
};

export { loginApi };
