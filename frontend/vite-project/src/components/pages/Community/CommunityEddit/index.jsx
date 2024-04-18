import React, { useState, useRef, useEffect } from 'react';
import CommuHeader from '../components/CommuHeader';
import {
	Box,
	WriteForm,
	InputBox,
	InputTitle,
	InputContent,
	Img,
} from '../CommunityWrite/WriteStyle';
import { RedStar } from '../../../WriteFrom/WriteFormStyle';
import { Button } from '../CommunityList/CommunityStyle';
import { ProductImg, ButtonUpload } from '../../../WriteFrom/WriteFormStyle';
import { UpdateCommunnity, GetDetail } from '../../../../apis/service/community.api';
import { useNavigate } from 'react-router-dom';

function CommuEddit({ id }) {
	const navigate = useNavigate();
	const [imgUrl, setImgUrl] = useState('');
	const [isBlanked, setIsBlanked] = useState(false);
	const [writeCommu, setWriteCommu] = useState({
		title: '',
		content: '',
		photos: '/commu_default_pic.png',
	});

	useEffect(() => {
		async function getInfo() {
			const res = await GetDetail(id);
			setWriteCommu({ title: res.title, content: res.content, photos: res.photos });
			setImgUrl(res.photos);
		}
		getInfo();
	}, []);

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

				await UpdateCommunnity(id, formData);
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
							name="photos"
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

export default CommuEddit;
