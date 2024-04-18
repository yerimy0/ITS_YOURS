import React, { useEffect, useState } from 'react';
import ChatListProfile from './ChatListProfile';
import { ChatListWrap, ChatListHeader, ChatContainer } from './ChatListStyle';
import { getChatList } from '../../../apis/service/Chat.api';
import { getChatDetail } from '../../../apis/service/Chat.api';
function ChatList() {
	const [chatroomId, setChatRoomId] = useState(''); //채팅방Id
	const [buyerInfo, setBuyerInfo] = useState([]);
	const [productInfo, setProductInfo] = useState([]);
	useEffect(() => {
		async function getList() {
			const res = await getChatList();
			setChatRoomId(res[0]._id);

			const detailRes = await getChatDetail(chatroomId);
			setBuyerInfo(detailRes.buyerId);
			setProductInfo(detailRes.productId);
		}
		getList();
	}, []);

	return (
		<ChatListWrap>
			<ChatListHeader>
				<img src="/logoCharacter.png" alt="" />
				Chat List
			</ChatListHeader>
			<ChatContainer>
				<ChatListProfile buyerInfo={buyerInfo} productInfo={productInfo} />
			</ChatContainer>
		</ChatListWrap>
	);
}

export default ChatList;
