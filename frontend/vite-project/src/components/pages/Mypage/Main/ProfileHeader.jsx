import React from 'react';
import { Greeting, NameBadge } from './ProfileStyles';
import EditButton from './EditButton';

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
