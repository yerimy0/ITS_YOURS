import styled from 'styled-components';

const ChatListWrap = styled.section`
	width: 36%;

	@media screen and (max-width: 1030px) {
		width: 100%;
	}
`;

const ChatListHeader = styled.div`
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	font-family: moiraione-regular;
	font-size: 26px;

	img {
		width: 60px;
	}
`;

const ChatContainer = styled.div`
	height: 650px;
	overflow-y: scroll;

	@media screen and (max-width: 1030px) {
		height: 296px;
	}
`;

export { ChatListWrap, ChatListHeader, ChatContainer };
