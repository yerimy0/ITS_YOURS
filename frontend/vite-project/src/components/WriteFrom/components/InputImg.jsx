import { useState, useRef, useEffect } from 'react';
import {
	Box,
	Sentence,
	RedStar,
	Label,
	Notion,
	ProductImg,
	Img,
	ButtonUpload,
	CloseButton,
} from '../WriteFormStyle';

function InputImg({ onImageChange, value }) {
	const [imgUrls, setImgUrls] = useState(value);
	const FileInputs = useRef([]);

	useEffect(() => {
		setImgUrls(value);
	}, [value]);

	function handleChange(index, e) {
		const fileUploaded = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			const newUrls = [...imgUrls];
			newUrls[index] = reader.result;
			setImgUrls(newUrls);
			onImageChange(newUrls);
		};
		if (fileUploaded) {
			reader.readAsDataURL(fileUploaded);
		}
	}

	function handleClick(index) {
		FileInputs.current[index].click();
	}

	// 업로드한 사진 삭제
	function handleRemove(index) {
		const newUrls = [...imgUrls];
		newUrls[index] = '';
		setImgUrls(newUrls);
		onImageChange(newUrls);
	}

	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>상품이미지</Label>
				<Notion>첫번째 사진은 책표지를 올려주세요</Notion>
			</Sentence>
			<ProductImg>
				{imgUrls.map((url, index) => (
					<div key={index}>
						<ButtonUpload onClick={() => handleClick(index)}>
							{url ? (
								<Img src={url.replace('coversum', 'cover500')} alt={`image-${index}`} />
							) : (
								' 📸 Upload a file'
							)}
							{console.log(url)}
						</ButtonUpload>
						{url && <CloseButton onClick={() => handleRemove(index)}>✖</CloseButton>}
						<input
							type="file"
							onChange={e => handleChange(index, e)}
							ref={el => (FileInputs.current[index] = el)}
							style={{ display: 'none' }}
						/>
					</div>
				))}
			</ProductImg>
		</Box>
	);
}

export default InputImg;
