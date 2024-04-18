import { useState, useEffect, useContext } from 'react';
import UserIdContext from '../../../context/UserIdContext';
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
	TextAreaText,
} from './ChatRoomStyle';
import { useParams } from 'react-router-dom';
import { postChat } from '../../../apis/service/Chat.api';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');

function ChatRoom() {
	const [placeholder, setPlaceholder] = useState('메시지 입력해 주세요.');
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [sendMes, setSendMes] = useState('');

	const [receivedMes, setReceivedMes] = useState([]); // 여기에 전체 (수신 + 발신 )
	const [sendMsgStorage, setSendMsgStorage] = useState([]); // 프론트 테스트용 (temp) -> 삭제

	const { id } = useContext(UserIdContext);
	const { chatroomId } = useParams();

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
	async function handleKeyDown(e) {
		if (e.key == 'Enter') {
			// 보낼 메시지와 보낼 채팅방번호
			socket.emit('send_message', { message: sendMes, roomNum: chatroomId, sendId: id });
			await postChat(chatroomId, sendMes);
			// setSendMsgStorage(prevMessages => [...prevMessages, sendMes]);
			setSendMes('');
		}
	}
	// 메시지 전송 내용
	function onChange(e) {
		setSendMes(e.target.value);
	}

	useEffect(() => {
		socket.emit('ask_join', { roomNum: chatroomId });
	}, []);
	// socket 랜더링시, 방 조인 + 메시지 수신
	useEffect(() => {
		socket.on('message_broadcast', data => {
			console.log(data.message);
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
						{sendMsgStorage.map((msg, i) => {
							return (
								<SendTextWrap>
									<SendTime>오후 7:50</SendTime>
									<SendText>{msg}</SendText>
								</SendTextWrap>
							);
						})}
						<ReplyTextWrap>
							<ReplyText>{receivedMes}</ReplyText>
							<ReplyTime>오후 12:50</ReplyTime>
						</ReplyTextWrap>
					</ChatWrap>
				</ChatContainer>
			</ChatSction>
			<InputWrap className="inputwrap">
				<TextAreaText
					className="inputtext"
					type="text"
					placeholder={placeholder}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					onChange={onChange}
					value={sendMes}
				></TextAreaText>
			</InputWrap>
		</ChatRoomWrap>
	);
}

export default ChatRoom;
