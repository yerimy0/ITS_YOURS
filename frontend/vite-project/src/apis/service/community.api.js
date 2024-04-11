import instance from '../axiosInstance';

async function GetCommunnityList() {
	try {
		const res = await instance.get('/api/community/posts');
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
}

export { GetCommunnityList };
