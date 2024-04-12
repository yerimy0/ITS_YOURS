// import axios from 'axios';
import instance from '../../../apis/axiosInstance';

const loginApi = async (userId, password) => {
	try {
		const response = await instance.post('/api/members/login', { id: userId, password });
		console.log(response);
		const { accessToken } = response.data;
		return { accessToken, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error };
	}
};

export { loginApi };
