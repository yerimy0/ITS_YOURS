import React from 'react';
import { Greeting, NameBadge, EditButton } from './ProfileStyles';

function ProfileHeader(props) {
	return (
		<Greeting>
			안녕하세요
			<NameBadge>
				{props.userName}님
				<EditButton />
			</NameBadge>
		</Greeting>
	);
}

export default ProfileHeader;
