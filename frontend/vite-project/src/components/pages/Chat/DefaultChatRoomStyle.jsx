import styled from 'styled-components';

const DefaultChatRoomWrap = styled.section`
	display: flex;
	width: 70%;
	height: 750px;
	padding: 10px 10px 15px 10px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border-left: 1px solid #f4f4f4;

	@media screen and (max-width: 1030px) {
		width: 100%;
		border: 0;
		height: 370px;
	}
`;

const ImgContainer = styled.div`
	top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 40%;
	height: auto;
`;
const Text = styled.p`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
	font-size: 24px;
`;

export { DefaultChatRoomWrap, ImgContainer, Img, Text };
