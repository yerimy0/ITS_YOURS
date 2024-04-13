import styled from 'styled-components';

const ChatListWrap = styled.section`
	display: flex;
	width: 600px;
	height: 750px;
	padding: 10px 10px 15px 10px;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const ChatListHeader = styled.div`
	width: 100%;
	display: flex;
	height: auto;
	padding: 15px 10px;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
	box-sizing: border-box;
`;

const ChatContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	padding: 10px 30px 20px 30px;
	flex-direction: column-reverse;
	align-items: center;
	gap: 25px;
	box-sizing: border-box;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}
`;

export { ChatListWrap, ChatListHeader, ChatContainer };
