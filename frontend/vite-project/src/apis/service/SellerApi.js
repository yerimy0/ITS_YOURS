import instance from '../axiosInstance';

async function fetchSellerDataById(id) {
	try {
		const res = await instance.get(`/members/sellerInfo?id=${id}`);
		if (res.status === 200) {
			return res.data;
		}
	} catch (err) {
		console.error('Error fetching seller data:', err);
		throw err; // 상위 호출자에게 에러를 전달할 수 있도록 throw
	}
	return null;
}

export { fetchSellerDataById };
