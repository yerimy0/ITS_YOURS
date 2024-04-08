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
		<ChatRoomWrap>
			<ChatSction>
				<ChatRoomHeader />
				<ChatContainer>
					<ChatDate>2024. 3. 28</ChatDate>
					<ChatWrap>
						<SendTextWrap>
							<SendTime>오후 7:50</SendTime>
							<SendText>Lorem ipsum dolor sit amet</SendText>
						</SendTextWrap>
						<ReplyTextWrap>
							<ReplyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime>오후 12:50</ReplyTime>
						</ReplyTextWrap>
					</ChatWrap>
				</ChatContainer>
			</ChatSction>
			<InputWrap>
				<InputText
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
