import React, { useState } from 'react';
import {
	ProfileWrap,
	Profile,
	ProfileImg,
	ProfileInfo,
	Wrap,
	NickName,
	Notification,
	BookName,
	SendTime,
} from './ChatListProfileStyle';

function ChatListProfile({ buyerInfo, productInfo }) {
	const [isActive, setIsActive] = useState(false);

	// console.log(buyerInfo, productInfo);
	function handleClick() {
		setIsActive(!isActive);
	}

	return (
		<ProfileWrap className={isActive ? 'active' : ''} onClick={handleClick}>
			<Profile>
				<ProfileImg src={buyerInfo.profilePic} />
			</Profile>
			<ProfileInfo>
				<Wrap>
					<NickName>{buyerInfo.nickName}</NickName>
					<Notification />
				</Wrap>
				<Wrap>
					<BookName>{productInfo.name}</BookName>
					<SendTime>1시간 전</SendTime>
				</Wrap>
			</ProfileInfo>
		</ProfileWrap>
	);
}

export default ChatListProfile;
