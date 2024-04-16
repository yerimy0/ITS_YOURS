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

function ChatListProfile() {
	const [isActive, setIsActive] = useState(false);

	function handleClick() {
		setIsActive(!isActive);
	}

	return (
		<>
			<ProfileWrap className={isActive ? 'active' : ''} onClick={handleClick}>
				<Profile>
					<ProfileImg src="/profile.jpg" />
				</Profile>
				<ProfileInfo>
					<Wrap>
						<NickName>카페인 줄여야지</NickName>
						<Notification />
					</Wrap>
					<Wrap>
						<BookName>
							데일 카네기의 인ㄹㅇㄴㄴㄴㄹㅇㄹㄴㄹㄴㅇㄴㄴㄹㄹㄴㅇㅇㄹㄴㅇㄹㄴㄹ간관계론
						</BookName>
						<SendTime>1시간 전</SendTime>
					</Wrap>
				</ProfileInfo>
			</ProfileWrap>
		</>
	);
}

export default ChatListProfile;
