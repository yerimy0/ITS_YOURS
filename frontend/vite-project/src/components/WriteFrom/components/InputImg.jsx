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
		const newUrls = [...imgUrls];
		newUrls[index] = fileUploaded;
		setImgUrls(newUrls);
		onImageChange(newUrls);
	}

	function handleClick(index) {
		FileInputs.current[index].click();
	}

	// 업로드한 사진 삭제
	function handleRemove(index) {
		const newUrls = [...imgUrls];
		newUrls[index] = null;
		setImgUrls(newUrls);
		onImageChange(newUrls);
	}

	function isURLObject(url) {
		return typeof url === 'object' && url !== null && url instanceof File;
	}

	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>상품이미지</Label>
				<Notion>첫번째 사진은 책표지를 올려주세요</Notion>
			</Sentence>
			<ProductImg>
				{imgUrls.map((file, index) => (
					<div key={index}>
						<ButtonUpload onClick={() => handleClick(index)}>
							{file ? (
								isURLObject(file) ? (
									<Img src={URL.createObjectURL(file)} alt={`image-${index}`} />
								) : (
									<Img src={file} alt={`image-${index}`} />
								)
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
							{/* {console.log(file)} */}
						</ButtonUpload>
						{file && <CloseButton onClick={() => handleRemove(index)}>✖</CloseButton>}
						<input
							type="file"
							name="imgUrls"
							onChange={e => handleChange(index, e)}
							ref={el => (FileInputs.current[index] = el)}
							style={{ display: 'none' }}
							multiple
						/>
					</div>
				))}
			</ProductImg>
		</Box>
	);
}

export default InputImg;
