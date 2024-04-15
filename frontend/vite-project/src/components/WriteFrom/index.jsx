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
	SmallButton,
	BigButton,
} from './WriteFormStyle';
import InputImg from './components/InputImg';
import { Section, Section2, Section3, Section4 } from './components/Section';
import { useEffect, useState, createContext } from 'react';
import { Register } from '../../apis/service/product.api';

export let RegisterContext = createContext();

function WriteForm() {
	const navigate = useNavigate();
	const [isValid, setIsValid] = useState(false);
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
		const isFilled = Object.values(register).every(value => value !== '');
		setIsValid(isFilled);
	}, [register]);

	useEffect(() => {
		const dbReq = indexedDB.open('tempSave', 1);
		dbReq.addEventListener('success', function (e) {
			const db = e.target.result;

			const transaction = db.transaction(['product'], 'readwrite');
			const store = transaction.objectStore('product');
			const request = store.getAll();

			request.onsuccess = function (e) {
				const savedData = e.target.result;
				if (savedData.length > 0) {
					const latestData = savedData[0];
					setRegister(latestData);
				}
			};
		});
	}, []);

	function onChange(e) {
		const { value, name } = e.target;
		setRegister({
			...register,
			[name]: value,
		});
	}

	async function Upload() {
		await Register(register);
		navigate('/product');
	}

	function handleImageChange(newUrls) {
		setRegister({
			...register,
			imgUrls: newUrls,
		});
	}

	function tempSave() {
		const dbReq = indexedDB.open('tempSave', 1);
		let db;
		dbReq.addEventListener('success', function (e) {
			db = e.target.result;

			const transaction = db.transaction(['product'], 'readwrite');
			const store = transaction.objectStore('product');
			const request = store.put(register);

			request.onsuccess = function () {
				console.log('임시 저장되었습니다.');
			};

			request.onerror = function () {
				console.log('임시 저장에 실패했습니다.');
			};
		});
		dbReq.addEventListener('error', function (e) {
			const error = e.target.error;
			console.log('error', error.name);
		});
		dbReq.addEventListener('upgradeneeded', function (e) {
			db = e.target.result;
			let oldVersion = e.oldVersion;
			if (oldVersion < 1) {
				const productStore = db.createObjectStore('product', {
					keyPath: 'id',
					autoIncrement: true,
				});
			}
		});
	}

	return (
		<RegisterContext.Provider value={(setRegister, register)}>
			<RegisterBox>
				<Title>
					<TopTitle>상품 등록</TopTitle>
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
					<BigButton className="Button" onClick={tempSave}>
						임시저장
					</BigButton>{' '}
					<BigButton
						className="Button"
						onClick={() => {
							if (isValid) {
								Upload();
							} else {
								alert('모든 필수 항목을 입력해주세요!');
							}
						}}
					>
						등록하기
					</BigButton>
				</RegButtons>
			</RegisterBox>
		</RegisterContext.Provider>
	);
}

export default WriteForm;
