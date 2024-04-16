import React from 'react';
import ChatListProfile from './ChatListProfile';
import { ChatListWrap, ChatListHeader, ChatContainer } from './ChatListStyle';

function ChatList() {
	return (
		<ChatListWrap className="chatlistwrap">
			<ChatListHeader className="chatlistheader">
				<img src="/logoCharacter.png" alt="" />
				Chat List
			</ChatListHeader>
			<ChatContainer className="chatcontainer">
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
				<ChatListProfile className="chatlistprofile" />
			</ChatContainer>
		</ChatListWrap>
	);
}

export default ChatList;
