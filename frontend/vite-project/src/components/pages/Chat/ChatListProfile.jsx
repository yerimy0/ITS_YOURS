import React, { useEffect, useState } from 'react';
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

function ChatListProfile({ buyerInfo, productInfo, product }) {
	const [insertProduct, setInsertProduct] = useState({});

	const [isActive, setIsActive] = useState(false);
	console.log(productInfo);
	function handleClick() {
		setIsActive(!isActive);
	}

	useEffect(() => {
		productInfo.map(e => {
			if (e._id === product) setInsertProduct(e);
		});
	}, []);
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
					<BookName>{insertProduct.name}</BookName>
					<SendTime>1시간 전</SendTime>
				</Wrap>
			</ProfileInfo>
		</ProfileWrap>
	);
}

export default ChatListProfile;
