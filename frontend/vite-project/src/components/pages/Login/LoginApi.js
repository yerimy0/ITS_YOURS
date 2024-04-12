import axios from 'axios'
import instance from '../../../apis/axiosInstance'


export const loginApi = async (userId, password) => {
	try {
		const response = await axios.post('http://localhost:4000')
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
		const { token } = response.data;
		return { token, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error.response.data };
	}
};
