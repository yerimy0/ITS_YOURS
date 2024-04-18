import React from 'react';
import { Greeting, NameBadge } from './ProfileStyles';
import EditButton from './EditButton';

function ProfileHeader(props) {
	return (
		<Greeting>
			<h3>안녕하세요</h3>
			<NameBadge>
				<h4>{props.userName}님</h4>
				<EditButton />
			</NameBadge>
		</Greeting>
	);
}

export default ProfileHeader;
