import instance from '../axiosInstance';

async function GetCommunnityList() {
	try {
		const res = await instance.get('/community/posts');
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function GetDetail(id) {
	try {
		const res = await instance.get(`/community/posts/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function Getcommets(id) {
	try {
		const res = await instance.get(`/community/posts/${id}/comment`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function PostCommunity(writeCommu) {
	try {
		const res = await instance.post(`/community/posts`, writeCommu);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function PostComment(comments, id) {
	try {
		const res = await instance.post(`/community/posts/${id}/comment`, comments);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export { GetCommunnityList, GetDetail, Getcommets, PostCommunity, PostComment };
