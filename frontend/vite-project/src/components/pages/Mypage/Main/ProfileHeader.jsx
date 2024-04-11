import React from 'react';
import { Greeting, NameBadge } from './ProfileStyles';
import EditButton from './EditButton'; // 분리된 EditButton 컴포넌트

function ProfileHeader(props) {
	return (
		<Greeting>
			안녕하세요
			<NameBadge>
				{props.userName}님
				<EditButton /> {/* 분리된 EditButton 컴포넌트 사용 */}
			</NameBadge>
		</Greeting>
	);
}

export default ProfileHeader;
