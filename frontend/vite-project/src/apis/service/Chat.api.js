import instance from '../axiosInstance';

async function createChatroom(productId, sellerId, buyerNickName) {
	console.log(productId, sellerId, buyerNickName);
	const res = await instance.post(`/chat/${productId}/${sellerId}/${buyerNickName}`, {});
	console.log(res);
	return res.data;
}
async function getChatList() {
	const res = await instance.get(`/chat`);
	console.log(res.data);
	return res.data;
}
async function getChatDetail(chatroomId) {
	console.log('chatroomId', chatroomId);
	const res = await instance.get(`/chat/detail/${chatroomId}`);
	console.log(res.data.data.chatroom);
	return res.data.data.chatroom;
}
async function postChat(chatroomId, sendMes) {
	const res = await instance.post(`/chat/${chatroomId}`, { content: sendMes });
	console.log(res.data.data);
	return res.data.data;
}
async function quitChat(productId, sellerId, buyerId) {
	const res = await instance.delete(`/${productId}/${sellerId}/${buyerId}`);
	console.log(res.data.data);
	return res.data.data;
}
async function thumbUp(Id) {
	const res = await instance.put(`/chat/thumbsUp`, { Id });
	console.log(res);
	return;
}
async function thumbDown(Id) {
	const res = await instance.put(`/chat/thumbsDown`, { Id });
	console.log(res);
	return;
}
async function confirmBuying(productId) {
	const res = await instance.put(`/chat/confirmBuying`, { productId: productId });
	console.log(res);
	return;
}

export {
	createChatroom,
	getChatList,
	getChatDetail,
	postChat,
	quitChat,
	thumbUp,
	thumbDown,
	confirmBuying,
};
