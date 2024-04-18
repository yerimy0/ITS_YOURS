import React, { useEffect, useState } from 'react';
import {
	ProfileWrapper,
	ProfileImage,
	IconWrapper,
	HiddenFileInput,
	IconImage,
} from './UsersStyles';

function ProfileImageUploader({ onImageSelected, initialPreview }) {
	const [preview, setPreview] = useState('');

	useEffect(() => {
		if (initialPreview) {
			setPreview(initialPreview);
		}
	}, [initialPreview]);

	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setPreview(imageUrl);
			onImageSelected(file);
		}
	};

	return (
		<ProfileWrapper>
			<div className="profile_wrap" style={{ marginTop: '30px' }}>
				<ProfileImage src={preview} />
				<form
					className="form-box"
					action="/api/members/me"
					method="PUT"
					enctype="multipart/form-data"
				>
					<HiddenFileInput
						type="file"
						name="profilePic"
						accept="image/*"
						onChange={handleImageChange}
						id="profile-image-upload"
					/>
					<IconWrapper htmlFor="profile-image-upload">
						<IconImage src="/photo.svg" alt="Upload" />
					</IconWrapper>
				</form>
			</div>
		</ProfileWrapper>
	);
}

export default ProfileImageUploader;
