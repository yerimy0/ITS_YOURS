import React from 'react';
import { ProfileImage } from './ProfileStyles';

function ProfilePicture(props) {
	return <ProfileImage src={props.imageUrl} />; // 'src' 속성을 사용합니다.
}

export default ProfilePicture;
