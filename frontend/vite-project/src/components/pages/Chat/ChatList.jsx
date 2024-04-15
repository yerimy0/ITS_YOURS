import React from 'react';
import ChatListProfile from './ChatListProfile';
import { ChatListWrap, ChatListHeader, ChatContainer } from './ChatListStyle';

function ChatList() {
	return (
		<ChatListWrap>
			<ChatListHeader>하리보</ChatListHeader>
			<ChatContainer>
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
				<ChatListProfile />
			</ChatContainer>
		</ChatListWrap>
	);
}

export default ChatList;
