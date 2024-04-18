import instance from '../axiosInstance';

async function Register(register) {
	try {
		console.log(register.imgUrls);
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
async function GetBookInfo(name) {
	try {
		const res = await instance.get(`/products/searchBook/${name}`);
		return res.data.data;
	} catch (err) {
		console.log(err.message);
	}
}

async function UpdateRegister(prodId, newContent) {
	try {
		const res = await instance.put(`/products`, newContent, {
			params: {
				prodId,
			},
		});
		return res;
	} catch (err) {
		console.log(err.message);
	}
}

async function searchBooksByName(name) {
	try {
		const res = await instance.get(`/products/search?name=${name}`);
		return res.data.data;
	} catch (err) {
		console.error('Error searching books:', err);
		throw err; // 상위 호출자에게 에러를 전달할 수 있도록 throw
	}
}

async function fetchDefaultProducts() {
	try {
		const res = await instance.get('/products/list');
		if (res.status === 200) {
			return res.data;
		}
	} catch (err) {
		console.error('Error fetching default products:', err);
		throw err; // 상위 호출자에게 에러를 전달할 수 있도록 throw
	}
	return [];
}

export {
	Register,
	GetDetail,
	UpdateRegister,
	GetBookInfo,
	searchBooksByName,
	fetchDefaultProducts,
};
