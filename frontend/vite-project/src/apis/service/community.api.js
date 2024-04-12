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

async function PostComment(newComment, id) {
	try {
		const res = await instance.post(`/community/posts/${id}/comment`, { content: newComment });
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function DeleteComment(id, commetId) {
	try {
		const res = await instance.delete(`/community/posts/${id}/comment/${commetId}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export { GetCommunnityList, GetDetail, Getcommets, PostCommunity, PostComment, DeleteComment };
