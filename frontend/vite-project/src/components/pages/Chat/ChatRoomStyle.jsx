import styled from 'styled-components';

const ChatRoomWrap = styled.section`
	width: 60%;

	// display: flex;
	// width: 600px;
	height: 750px;
	background: #f4f4f4;
	// padding: 10px 10px 15px 10px;
	// flex-direction: column;
	// justify-content: space-between;
	// align-items: center;

	@media screen and (max-width: 1030px) {
		width: 100%;
		border-top: 1px solid #f4f4f4;
	}
`;
const ChatSction = styled.div`
	// width: 100%;
	// display: flex;
	// flex-direction: column;
	// align-items: center;
`;

const ChatContainer = styled.div`
	height: 485px;
	overflow-y: scroll;
	padding: 20px;
	// display: flex;
	// flex-direction: column;
	// align-items: flex-start;
`;
const ChatDate = styled.p`
	width: 100%;
	// display: flex;
	// height: 36px;
	padding: 0 0 20px;
	// justify-content: center;
	// align-items: center;
	text-align: center;
	font-size: 14px;
	font-weight: 500;
	// line-height: 20px;
	// margin: 0;
`;

const ChatWrap = styled.div`
	// display: flex;
	// padding: 10px 25px;
	// flex-direction: column;
	// align-items: center;
	// gap: 30px;
`;

const SendTextWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 10px;
	margin-bottom: 30px;
	// width: 100%;
	// display: flex;
	// flex-direction: row;
	// align-items: flex-end;
	// justify-content: flex-end;
`;

const SendTime = styled.p`
	white-space: pre-line;

	// width: 80px;
	// text-align: left;
	// font-size: 14px;
	// font-style: normal;
	// font-weight: 400;
	// line-height: 20px;
	// letter-spacing: 0.25px;
	// white-space: nowrap;
	// margin: 0;
`;

const SendText = styled.div`
	width: 70%;

	// display: flex;
	padding: 20px 20px 20px 25px;
	border-radius: 50px 0px 20px 50px;
	background: #009dff;
	font-size: 16px;
	// font-style: normal;
	// font-weight: 400;
	line-height: 22px;
	// letter-spacing: 0.5px;
	color: #fff;
`;

const ReplyTextWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	margin-bottom: 30px;

	// width: 100%;
	// display: flex;
	// flex-direction: row;
	// align-items: flex-end;
	// justify-content: flex-start;
`;

const ReplyText = styled.div`
	width: 70%;
	white-space: pre-line;
	border-radius: 0px 50px 50px 20px;
	padding: 20px 20px 20px 25px;
	background: #fff;
	font-size: 16px;
	// display: flex;
	// padding: 8px 20px 8px 10px;
	// align-items: center;

	// font-style: normal;
	// font-weight: 400;
	// line-height: 24px;
	// letter-spacing: 0.5px;
	// color: #fff;
`;
const ReplyTime = styled.div`
	// width: 80px;
	// text-align: left;
	// font-size: 14px;
	// font-style: normal;
	// font-weight: 400;
	// line-height: 20px;
	// letter-spacing: 0.25px;
	// white-space: nowrap;
	// margin: 0;
`;

const InputWrap = styled.div`
	width: 80%;
	margin: 20px auto 0;
	border: 1px solid #ddd;
	border-radius: 20px;
	background: #fff;
	padding: 8px 20px;
	// box-sizing: border-box;
	// justify-content: space-between;
	// display: flex;
	// align-items: center;
	// padding: 0 15px;
`;

const InputText = styled.input`
	width: 100%;
	// border: none;
	font-size: 16px;
	// font-style: normal;
	// font-weight: 400;
	// line-height: 24px;
	// letter-spacing: 0.5px;
	// position: relative;
	// padding: 5px;
	// background: none;
	&:focus {
		outline: none;
	}

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
