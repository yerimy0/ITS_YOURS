import React from 'react';
import { ProfileImage } from './ProfileStyles';

function ProfilePicture(props) {
	return <ProfileImage src={props.imageUrl} />;
}

export default ProfilePicture;
