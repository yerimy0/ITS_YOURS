import instance from '../axiosInstance';

export async function Register(register) {
	try {
		const writing = await instance.post('/products/insertProduct', { register });
		console.log(writing);
	} catch (err) {
		console.log(err.message);
	}
}
