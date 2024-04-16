import React from 'react';
import ChatListProfile from './ChatListProfile';
import { ChatListWrap, ChatListHeader, ChatContainer } from './ChatListStyle';

function ChatList() {
	return (
		<ChatListWrap>
			<ChatListHeader>
				<img src="/logoCharacter.png" alt="" />
				Chat List
			</ChatListHeader>
			<ChatContainer>
				<ChatListProfile />
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
