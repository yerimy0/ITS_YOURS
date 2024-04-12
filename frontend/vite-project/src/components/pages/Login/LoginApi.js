// import axios from 'axios';
import instance from '../../../apis/axiosInstance';

const loginApi = async (userId, password) => {
	try {
		const response = await instance.post('/api/members/login', { id: userId, password });
		// const response = await instance.post('/')
		// const response = await axios.post('http://localhost:4000')
		// console.log(res.data)
		// const response = await instance2.post('/', {
		// })
		// const response = await instance.post('/api/members/login', {
		// 	userId,
		// 	password,
		// });
		console.log(response.data);
		const { accessToken } = response.data;
		return { accessToken, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error.response.data };
	}
};

export { loginApi };
