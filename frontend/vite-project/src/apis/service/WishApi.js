import instance from '../axiosInstance';

// 사용자의 찜 목록을 조회하는 함수
async function fetchUserWishList(userId) {
	try {
		const res = await instance.get(`/wishes/${userId}`);
		if (res.status === 200) {
			return res.data;
		}
	} catch (err) {
		console.error('Error fetching user wish list:', err);
		throw err;
	}
	return [];
}

// 사용자의 찜 목록을 토글하는 함수
async function toggleWishlist(productId) {
	try {
		const res = await instance.post('/wishes/toggle', { productId });
		if (res.status === 200) {
			return res;
		}
	} catch (err) {
		console.error('Error toggling wishlist:', err);
		throw err;
	}
}

export { fetchUserWishList, toggleWishlist };
