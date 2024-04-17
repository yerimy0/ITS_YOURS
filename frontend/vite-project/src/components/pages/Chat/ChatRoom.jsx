import { useState, useEffect } from 'react';
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

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

function ChatRoom() {
	const [placeholder, setPlaceholder] = useState('메시지 입력해 주세요.');
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [sendMes, setSendMes] = useState('');
	const [receivedMes, setReceivedMes] = useState('');

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
			socket.emit('send_message', { message: sendMes });
		}
	};
	// 메시지 전송 내용
	function onChange(e) {
		setSendMes(e.target.value);
	}

	useEffect(() => {
		socket.on('receive_message', data => {
			setReceivedMes(data.message);
		});
	}, [socket]);

	return (
		<ChatRoomWrap>
			<ChatSction>
				<ChatRoomHeader />
				<ChatContainer>
					<ChatDate>2024. 3. 28</ChatDate>
					<ChatWrap>
						<SendTextWrap>
							<SendTime>오후 7:50</SendTime>
							<SendText>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</SendText>
						</SendTextWrap>
						<ReplyTextWrap>
							<ReplyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime>오후 12:50</ReplyTime>
						</ReplyTextWrap>
						<SendTextWrap>
							<SendTime>오후 7:50</SendTime>
							<SendText>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</SendText>
						</SendTextWrap>
						<ReplyTextWrap>
							<ReplyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</ReplyText>
							<ReplyTime>오후 12:50</ReplyTime>
						</ReplyTextWrap>
						<ReplyTextWrap>
							<ReplyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea coddmmodo consequat.
							</ReplyText>
							<ReplyTime>오후 12:50</ReplyTime>
						</ReplyTextWrap>
						{/* <h1>받은 메시지:</h1> */}
						{receivedMes}
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
					onChange={onChange}
					value={sendMes}
				></InputText>
			</InputWrap>
		</ChatRoomWrap>
	);
}

export default ChatRoom;
