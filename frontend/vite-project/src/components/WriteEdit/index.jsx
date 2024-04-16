import { useParams, useNavigate } from 'react-router-dom';
import {
	RegisterBox,
	Title,
	RedStar,
	TopTitle,
	Line,
	RegButtons,
	MainContent,
	ProductTwoInput,
	BigButton,
} from '../WriteFrom/WriteFormStyle';
import InputImg from '../WriteFrom/components/InputImg';
import { Section, Section2, Section3, Section4 } from '../WriteFrom/components/Section';
import { useEffect, useState, createContext } from 'react';
import { GetDetail, UpdateRegister } from '../../apis/service/product.api';

export const SetRegisterContext = createContext(() => {});
export const RegisterContext = createContext();

function EditForm() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [register, setRegister] = useState({
		name: '',
		price: 0,
		author: '',
		publisher: '',
		condition: '',
		description: '',
		imgUrls: ['', '', ''],
	});

	const { name, price, author, publisher, condition, description, imgUrls } = register;

	useEffect(() => {
		async function GetContent() {
			const res = await GetDetail(id);
			console.log(res);
			setRegister({
				name: res.name,
				price: res.price,
				author: res.author,
				publisher: res.publisher,
				condition: res.condition,
				description: res.description,
				imgUrls: res.imgUrls,
			});
		}
		GetContent();
	}, []);

	async function Eddit() {
		const res = await UpdateRegister(id, register);
		console.log(res);
		navigate('/product');
	}

	function onChange(e) {
		const { value, name } = e.target;
		setRegister({
			...register,
			[name]: value,
		});
	}

	function handleImageChange(newUrls) {
		setRegister({
			...register,
			imgUrls: newUrls,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const isFilled = Object.values(register).every(value => value !== '');
		if (isFilled) {
			Eddit();
		} else {
			alert('모든 필수 항목을 입력해주세요!');
		}
	}

	return (
		<SetRegisterContext.Provider value={setRegister}>
			<RegisterContext.Provider value={register}>
				<RegisterBox>
					<Title>
						<TopTitle>상품 수정</TopTitle>
						<RedStar>*필수 항목</RedStar>
					</Title>
					<Line>
						<hr />
					</Line>
					<MainContent>
						<InputImg onImageChange={handleImageChange} value={imgUrls} />
						<Section label={'도서명'} onChange={onChange} value={name} name="name" />
						<Section label={'판매가'} onChange={onChange} value={price} name="price" />
						<ProductTwoInput>
							<Section2 label={'출판사'} onChange={onChange} value={publisher} name="publisher" />
							<Section2 label={'저자'} onChange={onChange} value={author} name="author" />
						</ProductTwoInput>
						<Section3
							label={'상품 설명'}
							onChange={onChange}
							value={description}
							name="description"
						/>
						<Section4 value={condition} />
					</MainContent>
					<RegButtons>
						<BigButton className="Button" onClick={handleSubmit}>
							수정하기
						</BigButton>
					</RegButtons>
				</RegisterBox>
			</RegisterContext.Provider>
		</SetRegisterContext.Provider>
	);
}

export default EditForm;
