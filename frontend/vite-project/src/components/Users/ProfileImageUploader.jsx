import React, { useState } from 'react';
import {
	ProfileWrapper,
	ProfileImage,
	IconWrapper,
	HiddenFileInput,
	IconImage,
} from './UsersStyles';

function ProfileImageUploader({ onImageSelected, initialPreview }) {
	const [preview, setPreview] = useState(initialPreview || '/defaultProfileImage.png');

	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
			setPreview(URL.createObjectURL(file));
			onImageSelected(file);
		}
	};

	return (
		<ProfileWrapper>
			<div className="profile_wrap">
				{/* alt 일단 기본 프로필이 없어서 삼항연산자로 변경해뒀어요! */}
				<ProfileImage src={preview} alt={!preview ? 'preview' : ''} />
				<HiddenFileInput
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					id="profile-image-upload"
				/>
				<IconWrapper htmlFor="profile-image-upload">
					<IconImage src="/photo.svg" alt="Upload" />
				</IconWrapper>
			</div>
		</ProfileWrapper>
	);
}

export default ProfileImageUploader;
