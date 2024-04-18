import instance from '../axiosInstance';

async function createChatroom(productId, sellerId, buyerNickName) {
	console.log(productId, sellerId, buyerNickName);
	const res = await instance.post(`/chat/${productId}/${sellerId}/${buyerNickName}`, {});
	console.log(res);
	return res.data;
}

export { createChatroom };
