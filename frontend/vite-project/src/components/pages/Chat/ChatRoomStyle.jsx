import styled from 'styled-components';

const ChatRoomWrap = styled.section`
	width: 60%;
	height: 750px;
	background: #f4f4f4;

	@media screen and (max-width: 1030px) {
		width: 100%;
		border-top: 1px solid #f4f4f4;
	}
`;
const ChatSction = styled.div``;

const ChatContainer = styled.div`
	height: 485px;
	overflow-y: scroll;
	padding: 20px;
`;
const ChatDate = styled.p`
	width: 100%;
	padding: 0 0 20px;
	text-align: center;
	font-size: 14px;
	font-weight: 500;
`;

const ChatWrap = styled.div``;

const SendTextWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 10px;
	margin-bottom: 30px;
`;

const SendTime = styled.p`
	white-space: pre-line;
`;

const SendText = styled.div`
	max-width: 85%;
	padding: 20px 20px 20px 25px;
	border-radius: 50px 0px 20px 50px;
	background: #009dff;
	font-size: 16px;
	line-height: 22px;
	color: #fff;
`;

const ReplyTextWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	margin-bottom: 30px;
`;

const ReplyText = styled.div`
	max-width: 85%;
	white-space: pre-line;
	border-radius: 0px 50px 50px 20px;
	padding: 20px 20px 20px 25px;
	background: #fff;
	font-size: 16px;
`;
const ReplyTime = styled.div``;

const InputWrap = styled.div`
	width: 80%;
	margin: 20px auto 0;
	border: 1px solid #ddd;
	border-radius: 20px;
	background: #fff;
	padding: 8px 20px;
`;

const InputText = styled.input`
	width: 100%;
	font-size: 16px;

	&::placeholder {
		color: #aaa;
	}
`;

export {
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
};
