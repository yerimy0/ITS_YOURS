import instance from '../axiosInstance';

async function fetchPurchaseItems(buyerId) {
	try {
		const response = await instance.get(`/products/myTradedProducts/${buyerId}`);
		return response.data.data;
	} catch (error) {
		console.error('구매 목록을 가져오는데 실패했습니다:', error);
		throw error;
	}
}

export { fetchPurchaseItems };
