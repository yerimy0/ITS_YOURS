import React, { useState, useEffect } from 'react';
import MenuButtonComponent from './MenuButtonComponent';
import ProfileModal from './ProfileModal';
import {
	ChatRoomHeaderWrap,
	SellerProfile,
	Profile,
	ProfileImg,
	Wrap,
	NickName,
	BookInfo,
	BookCover,
	BookImg,
	TextWrap,
	Title,
	PriceContainer,
	Price,
	PriceWon,
} from './ChatRoomHeaderStyle';
import { quitChat, getChatDetail, getChatList } from '../../../apis/service/Chat.api';

function ChatRoomHeader() {
	const [profileModalOpen, setProfileModalOpen] = useState(false);
	const [chatroomId, setChatRoomId] = useState(''); //채팅방Id
	const [userInfo, setUserInfo] = useState([]);
	const [productInfo, setProductInfo] = useState([]);
	useEffect(() => {
		async function getList() {
			const res = await getChatList();
			setChatRoomId(res[0]._id);

			const detailRes = await getChatDetail(chatroomId);
			setUserInfo(detailRes.buyerId);
			setProductInfo(detailRes.productId);
			console.log(userInfo);
		}
		getList();
	}, []);

	const openProfileModal = () => {
		setProfileModalOpen(true);
	};

	const closeProfileModal = () => {
		setProfileModalOpen(false);
	};

	return (
		<>
			<ChatRoomHeaderWrap>
				<SellerProfile>
					<Profile onClick={openProfileModal}>
						<ProfileImg src={userInfo.profilePic} />
					</Profile>
					<Wrap>
						<NickName>{userInfo.nickName}</NickName>
						<MenuButtonComponent userInfo={userInfo} productInfo={productInfo} />
					</Wrap>
				</SellerProfile>
				<BookInfo>
					<BookCover>
						<BookImg src={productInfo.imgUrls} />
					</BookCover>
					<TextWrap>
						<Title>{productInfo.name}</Title>
						<PriceContainer>
							<Price>{productInfo.price}</Price>
							<PriceWon>원</PriceWon>
						</PriceContainer>
					</TextWrap>
				</BookInfo>
			</ChatRoomHeaderWrap>
			<ProfileModal isOpen={profileModalOpen} onClose={closeProfileModal} />
		</>
	);
}
export default ChatRoomHeader;
