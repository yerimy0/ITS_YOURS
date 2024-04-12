import axios from 'axios';

export async function Register(register) {
	try {
		// 쿠키에서 authToken 값을 가져옵니다.
		const authToken = document.cookie
			.split('; ')
			.find(row => row.startsWith('authToken='))
			.split('=')[1];

		const writing = await axios.post('/api/api/products', register, {
			headers: {
				Authorization: authToken ? `Bearer ${authToken}` : '', // 쿠키에 authToken 값이 있으면 Bearer 토큰과 함께 Authorization 헤더에 추가합니다.
			},
		});
		console.log(writing);
	} catch (err) {
		console.log(err.message);
	}
}
