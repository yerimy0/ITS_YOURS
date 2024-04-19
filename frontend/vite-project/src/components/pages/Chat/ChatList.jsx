import React, { useEffect, useState, useContext } from 'react';
import ChatListProfile from './ChatListProfile';
import { ChatListWrap, ChatListHeader, ChatContainer } from './ChatListStyle';
import { getChatList, getChatDetail } from '../../../apis/service/Chat.api';
import { ClickedChatContext } from '../../../pages/Chat';
import { useNavigate } from 'react-router-dom';

// 채팅방의 리스트 (왼쪽 만드는 페이지)
function ChatList() {
	const [buyerInfo, setBuyerInfo] = useState([]); // 상대방 정보
	const [productInfo, setProductInfo] = useState([]); // 제품 정보
	const [chatRoomLists, setChatRoomLists] = useState({}); // 내 속한 채팅방 리스트
	const [isLoaded, setIsLoaded] = useState(false);
	const { setClickedChatroom, clickedChatroom } = useContext(ClickedChatContext);
	const navigate = useNavigate();

	useEffect(() => {
		async function getList() {
			try {
				const res = await getChatList(); // 현 유저가 속한 채팅방 리스트 가져오기
				setChatRoomLists(res); // 리스트 저장

				const buyerIds = [];
				const productIds = [];

				// 각 채팅방의 상세 정보 가져오기
				await Promise.all(
					res.map(async chatRoomList => {
						// console.log('각 채팅방 id', chatRoomList._id);
						const detailRes = await getChatDetail(chatRoomList._id);
						// console.log(detailRes);
						// console.log('buyer', detailRes.buyerId);
						// console.log('product', detailRes.productId);

						buyerIds.push(detailRes.chatroom.buyerId);
						productIds.push(detailRes.chatroom.productId);
					}),
				);

				setBuyerInfo(buyerIds);
				setProductInfo(productIds);
				setIsLoaded(true);
			} catch (error) {
				console.error('오류가 발생했습니다	:', error);
			}
		}
		getList();
	}, []);

	function handleChatItem(chatroomId) {
		// console.log(chatroomId);
		navigate(`/chat/${chatroomId}`);
	}

	return (
		<ChatListWrap>
			<ChatListHeader>
				<img src="/logoCharacter.png" alt="" />
				Chat List
			</ChatListHeader>
			<ChatContainer>
				{isLoaded &&
					chatRoomLists.map((chatRoomList, i) => (
						<ChatListProfile
							onClick={() => {
								handleChatItem(chatRoomList._id);
							}}
							key={`item=${i}`}
							buyerInfo={buyerInfo[i]}
							productInfo={productInfo[i]}
						/>
					))}
			</ChatContainer>
		</ChatListWrap>
	);
}

export default ChatList;
