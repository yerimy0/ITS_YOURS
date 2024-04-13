import React, { useState, useRef } from 'react';
import CommuHeader from '../components/CommuHeader';
import {
	Box,
	WriteForm,
	InputBox,
	InputTitle,
	InputContent,
	AlertMessage,
	Img,
} from './WriteStyle';
import { Button } from '../CommunityList/CommunityStyle';
import { ProductImg, ButtonUpload } from '../../../WriteFrom/WriteFormStyle';
import { PostCommunity } from '../../../../apis/service/community.api';
import { useNavigate } from 'react-router-dom';

function CommuWrite() {
	const navigate = useNavigate();
	const [imgUrl, setImgUrl] = useState('');
	const [isBlanked, setIsBlanked] = useState(false);

	const [writeCommu, setWriteCommu] = useState({
		title: '',
		content: '',
		photos: '/commu_default_pic.png',
	});

	const fileInputRef = useRef(null);

	const handleInputChange = e => {
		setIsBlanked(false);
		const { name, value } = e.target;
		setWriteCommu({ ...writeCommu, [name]: value });
	};

	const handleImageChange = e => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setImgUrl(reader.result);
			setWriteCommu({ ...writeCommu, photos: reader.result });
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleClick = () => {
		fileInputRef.current.click();
	};

	const handleSubmit = () => {
		async function Post() {
			await PostCommunity(writeCommu);
			navigate('/community');
		}
		if (writeCommu.title !== '' && writeCommu.content !== '') {
			Post();
		} else {
			setIsBlanked(true);
		}
	};

	return (
		<Box>
			<CommuHeader />
			<WriteForm>
				<InputBox>
					<InputTitle
						placeholder="제목을 입력해주세요"
						name="title"
						value={writeCommu.title}
						onChange={handleInputChange}
					/>
					{isBlanked && <AlertMessage>제목과 내용을 모두 입력해주세요 :)</AlertMessage>}
					<InputContent
						placeholder="글 내용을 입력해주세요"
						name="content"
						value={writeCommu.content}
						onChange={handleInputChange}
					/>
					<div className="InputPics">
						<ButtonUpload onClick={handleClick}>
							{imgUrl ? <Img src={imgUrl} alt="Uploaded Image" /> : ' 📸 Upload a file'}
						</ButtonUpload>
						<input
							type="file"
							ref={fileInputRef}
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
				</InputBox>
				<Button onClick={handleSubmit}>등록하기</Button>
			</WriteForm>
		</Box>
	);
}

export default CommuWrite;
