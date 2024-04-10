import React from 'react';
import { ProfileImage } from './ProfileStyles';

function ProfilePicture(props) {
	return <ProfileImage imageUrl={props.imageUrl} />;
}

export default ProfilePicture;
