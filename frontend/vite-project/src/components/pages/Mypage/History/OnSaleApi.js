import instance from '../../../../apis/axiosInstance';

async function fetchOnSaleItems(sellerId) {
	try {
		const response = await instance.get(`/products/mySalesHistory/${sellerId}`);
		return response.data.data;
	} catch (error) {
		console.error('판매중인 목록을 가져오는데 실패했습니다:', error);
		throw error;
	}
}

async function deleteSaleItem(sellerId, productId) {
	try {
		await instance.delete(`/products/deleteMySalesHistory/${sellerId}/${productId}`);
	} catch (error) {
		console.error('아이템 삭제 실패:', error);
		throw error;
	}
}

export { fetchOnSaleItems, deleteSaleItem };
