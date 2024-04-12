import axios from 'axios';
import instance from '../axiosInstance';

export async function Register(register) {
	try {
		// 쿠키에서 authToken 값을 가져옵니다.
		// const authToken = document.cookie
		// 	.split('; ')
		// 	.find(row => row.startsWith('authToken='))
		// 	.split('=')[1];

		const writing = await instance.post('/api/products', register);
		console.log(writing);
	} catch (err) {
		console.log(err.message);
	}
}
