import styled from 'styled-components';

const ChatWrap = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 50px 0 150px;

	.chat_inner {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border: 1px solid #eee;
		border-radius: 20px;
		box-shadow:
			0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
	}

	@media screen and (max-width: 1030px) {
		.chat_inner {
			flex-wrap: wrap;
		}
	}
`;

export default ChatWrap;
