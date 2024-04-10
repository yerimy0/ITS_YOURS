import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	border-radius: 4px;
	overflow: hidden;
	width: 300px; // 필요에 따라 조절하세요
`;

const MessageList = styled.div`
	padding: 10px;
	height: 300px; // 필요에 따라 조절하세요
	overflow-y: auto;
`;

const InputContainer = styled.div`
	display: flex;
	padding: 10px;
	background: #f9f9f9;
`;

const Input = styled.input`
	flex-grow: 1;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
`;

const Button = styled.button`
	padding: 10px 15px;
	margin-left: 10px;
	border: none;
	background-color: #007bff;
	color: white;
	border-radius: 4px;
	cursor: pointer;
`;

function Faq() {
	const [message, setMessage] = React.useState('');

	function sendMessage() {
		// 메시지 보내는 로직
		console.log(message);
		setMessage('');
	}

	return (
		<ChatContainer>
			<MessageList>{/* 메시지 목록을 여기에 표시 */}</MessageList>
			<InputContainer>
				<Input
					value={message}
					onChange={e => setMessage(e.target.value)}
					onKeyPress={e => e.key === 'Enter' && sendMessage()}
					placeholder="메시지를 입력하세요."
				/>
				<Button onClick={sendMessage}>보내기</Button>
			</InputContainer>
		</ChatContainer>
	);
}

export default Faq;
