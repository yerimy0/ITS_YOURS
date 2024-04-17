// soldApi.js
import instance from '../../../../apis/axiosInstance';

async function fetchSoldItems(sellerId) {
	try {
		const response = await instance.get(`/products/mySalesHistory/${sellerId}`);
		return response.data.data;
	} catch (error) {
		console.error('판매 완료 목록을 가져오는데 실패했습니다:', error);
		throw error;
	}
}

async function deleteSaleItem(sellerId, prodId) {
	try {
		const response = await instance.delete(`/products/deleteMySalesHistory/${sellerId}/${prodId}`);
		return response; // 반환값 추가
	} catch (error) {
		console.error('아이템 삭제 실패:', error);
		throw error; // 이 error를 던지면 상위 catch 블록에서 잡힐 것입니다.
	}
}

export { fetchSoldItems, deleteSaleItem };
