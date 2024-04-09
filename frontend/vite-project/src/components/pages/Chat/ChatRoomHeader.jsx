import React, { useState } from 'react';
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

function ChatRoomHeader() {
	const [profileModalOpen, setProfileModalOpen] = useState(false);

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
						<ProfileImg src="./profile.jpg" />
					</Profile>
					<Wrap>
						<NickName>카페인 줄여야지</NickName>
						<MenuButtonComponent />
					</Wrap>
				</SellerProfile>
				<BookInfo>
					<BookCover>
						<BookImg src="/book_cover.jpg" />
					</BookCover>
					<TextWrap>
						<Title>디지털 논리 설계와 컴퓨터 구조</Title>
						<PriceContainer>
							<Price>27,000</Price>
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
