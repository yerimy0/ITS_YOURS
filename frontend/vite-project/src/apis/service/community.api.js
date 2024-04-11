import instance from '../axiosInstance';

async function GetCommunnityList() {
	try {
		const res = await instance.get('/api/community/posts');
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function GetDetail(id) {
	try {
		const res = await instance.get(`/api/community/posts/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function Getcommets(id) {
	try {
		const res = await instance.get(`/api/community/posts/${id}/comment`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export { GetCommunnityList, GetDetail, Getcommets };
