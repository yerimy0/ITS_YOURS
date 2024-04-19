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

function ChatListProfile({ userInfo, productInfo, product }) {
	const [insertProduct, setInsertProduct] = useState({});

	const [isActive, setIsActive] = useState(false);
	console.log('상품', productInfo);
	console.log('유저', userInfo);

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
				<ProfileImg src={userInfo[0].profilePic} />
			</Profile>
			<ProfileInfo>
				<Wrap>
					<NickName>{userInfo[0].nickName}</NickName>
					<Notification />
				</Wrap>
				<Wrap>
					<BookName>{insertProduct.name}</BookName>
					{/* <SendTime>1시간 전</SendTime> */}
				</Wrap>
			</ProfileInfo>
		</ProfileWrap>
	);
}

export default ChatListProfile;
