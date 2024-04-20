import React, { useState, useRef } from 'react';
import CommuHeader from '../components/CommuHeader';
import { RedStar } from '../../../WriteFrom/WriteFormStyle';
import { Box, WriteForm, InputBox, InputTitle, InputContent, Img } from './WriteStyle';
import { Button } from '../CommunityList/CommunityStyle';
import { ButtonUpload } from '../../../WriteFrom/WriteFormStyle';
import { PostCommunity } from '../../../../apis/service/community.api';
import { useNavigate } from 'react-router-dom';

function CommuWrite() {
	const navigate = useNavigate();
	const [imgUrl, setImgUrl] = useState('/commu_default_pic.png');
	const [isBlanked, setIsBlanked] = useState(false);

	const [writeCommu, setWriteCommu] = useState({
		title: '',
		content: '',
		photos: '/commu_default_pic.png',
	});

	const fileInputRef = useRef(null);

	function handleInputChange(e) {
		setIsBlanked(false);
		const { name, value } = e.target;
		setWriteCommu({ ...writeCommu, [name]: value });
	}

	function handleImageChange(e) {
		const file = e.target.files[0];
		if (file) {
			setWriteCommu({ ...writeCommu, photos: file });
			setImgUrl(URL.createObjectURL(file));
		} else {
			setWriteCommu({ ...writeCommu, photos: '/commu_default_pic.png' });
		}
	}

	function handleClick() {
		fileInputRef.current.click();
	}

	async function handleSubmit() {
		console.log(writeCommu.photos);
		try {
			if (writeCommu.title !== '' && writeCommu.content !== '') {
				const formData = new FormData();
				formData.append('title', writeCommu.title);
				formData.append('content', writeCommu.content);
				formData.append('photos', writeCommu.photos);

				await PostCommunity(formData);
				navigate('/community');
			} else {
				setIsBlanked(true);
			}
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<Box>
			<CommuHeader />
			<WriteForm>
				<InputBox
					encType="multipart/form-data"
					onSubmit={e => {
						e.preventDefault();
					}}
				>
					{isBlanked && <RedStar>제목과 내용을 모두 입력해주세요 :)</RedStar>}
					<InputTitle
						placeholder="제목을 입력해주세요"
						name="title"
						value={writeCommu.title}
						onChange={handleInputChange}
					/>
					<div className="line_style"></div>
					<InputContent
						placeholder="글 내용을 입력해주세요"
						name="content"
						value={writeCommu.content}
						onChange={handleInputChange}
					/>
					<div className="InputPics">
						<ButtonUpload onClick={handleClick} className="commu_file">
							{/* {imgUrl ? <Img src={imgUrl} alt="Uploaded Image" /> : ' 📸 Upload a file'} */}
							{imgUrl ? (
								<Img src={imgUrl} alt="Uploaded Image" />
							) : (
								<>
									<img
										src="/file_i4.png"
										className="file_icon"
										alt="File Icon"
										style={{ marginRight: '8px', width: '26px', height: '26px' }}
									/>
									Upload a file
								</>
							)}
						</ButtonUpload>
						<input
							type="file"
							name="photos"
							ref={fileInputRef}
							onChange={handleImageChange}
							style={{ display: 'none', width: '130px' }}
						/>
					</div>
				</InputBox>
				<Button onClick={handleSubmit}>등록하기</Button>
			</WriteForm>
		</Box>
	);
}

export default CommuWrite;
