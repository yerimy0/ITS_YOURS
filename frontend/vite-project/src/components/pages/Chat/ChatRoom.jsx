import { useState } from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import {
	ChatRoomWrap,
	ChatSction,
	ChatContainer,
	ChatDate,
	ChatWrap,
	SendTextWrap,
	SendTime,
	SendText,
	ReplyTextWrap,
	ReplyTime,
	ReplyText,
	InputWrap,
	InputText,
} from './ChatRoomStyle';

function ChatRoom() {
	const [placeholder, setPlaceholder] = useState('메시지 입력해 주세요.');
	const [isInputFocused, setIsInputFocused] = useState(false);

	// 입력창 포커스 관리 핸들러
	const handleFocus = () => {
		setIsInputFocused(true);
		setPlaceholder('');
	};

	// 입력창 포커스 아웃 관리 핸들러
	const handleBlur = () => {
		setIsInputFocused(false);
		setPlaceholder('메시지 입력해 주세요.');
	};

	// 엔터 키 다운 핸들러
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
		}
	};

	return (
		<ChatRoomWrap className="chatroomwrap">
			<ChatSction className="chatsction">
				<ChatRoomHeader />
				<ChatContainer className="chatcontainer">
					<ChatDate className="chatdate">2024. 3. 28</ChatDate>
					<ChatWrap className="chatwrap">
						<SendTextWrap className="sendtextwrap">
							<SendTime className="sendtime">오후 7:50</SendTime>
							<SendText className="sendtext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							</SendText>
						</SendTextWrap>
						<ReplyTextWrap className="replytextwrap">
							<ReplyText className="replytext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime className="replytime">오후 12:50</ReplyTime>
						</ReplyTextWrap>
						<SendTextWrap className="sendtextwrap">
							<SendTime className="sendtime">오후 7:50</SendTime>
							<SendText className="sendtext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							</SendText>
						</SendTextWrap>
						<ReplyTextWrap className="replytextwrap">
							<ReplyText className="replytext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime className="replytime">오후 12:50</ReplyTime>
						</ReplyTextWrap>
						<ReplyTextWrap className="replytextwrap">
							<ReplyText className="replytext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime className="replytime">오후 12:50</ReplyTime>
						</ReplyTextWrap>
					</ChatWrap>
				</ChatContainer>
			</ChatSction>
			<InputWrap className="inputwrap">
				<InputText
					className="inputtext"
					type="text"
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
				></InputText>
			</InputWrap>
		</ChatRoomWrap>
	);
}

export default ChatRoom;
