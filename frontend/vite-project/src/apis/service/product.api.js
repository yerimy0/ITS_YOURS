import axios from 'axios';
import instance from '../axiosInstance';

async function Register(register) {
	try {
		await instance.post('/products', register);
		return;
	} catch (err) {
		console.log(err.message);
	}
}

async function GetDetail(id) {
	try {
		const res = await instance.get(`/products/${id}`);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
}

async function UpdateRegister(id, newContent) {
	try {
		const res = await instance.put(`/products/${id}`, newContent);
		return res;
	} catch (err) {
		console.log(err.message);
	}
}

export { Register, GetDetail, UpdateRegister };
