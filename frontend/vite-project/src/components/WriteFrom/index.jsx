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
import { useEffect, useState, useContext, createContext } from 'react';
import { Register } from '../../apis/service/product.api';
import UserIdContext from '../../context/UserIdContext';

export const SetRegisterContext = createContext();
export const RegisterContext = createContext();

function WriteForm() {
	const { id } = useContext(UserIdContext);

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
		console.log(id);
		if (id == '') navigate('/login');
	}, []);

	useEffect(() => {
		const isFilled = Object.values(register).every(value => value !== '');
		setIsValid(isFilled);
	}, [register]);

	useEffect(() => {
		const dbReq = indexedDB.open('tempSave', 1);
		dbReq.addEventListener('success', function (e) {
			const db = e.target.result;
			const transaction = db.transaction(['productTemp'], 'readwrite');
			const store = transaction.objectStore('productTemp');
			const request = store.getAll();

			request.onsuccess = function (e) {
				const savedData = e.target.result;
				if (savedData.length > 0) {
					const latestData = savedData[0];
					setRegister(latestData);
				}
			};
		});
		dbReq.addEventListener('upgradeneeded', function (e) {
			let db = e.target.result;
			let oldVersion = e.oldVersion;
			if (oldVersion === 0) {
				db.createObjectStore('productTemp', {
					keyPath: 'id',
					autoIncrement: true,
				});
				dbReq.onerror = e => {
					console.log('fail', e);
				};
				dbReq.onsuccess = e => {
					console.log('성공');
					db = dbReq.result;
					dbReq.addEventListener('success', function (e) {
						const db = e.target.result;
						const transaction = db.transaction(['productTemp'], 'readwrite');
						const store = transaction.objectStore('productTemp');
						const request = store.getAll();

						request.onsuccess = function (e) {
							const savedData = e.target.result;
							if (savedData.length > 0) {
								const latestData = savedData[0];
								setRegister(latestData);
							}
						};
					});
				};
			}
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
		try {
			const formData = new FormData();
			formData.append('name', register.name);
			formData.append('price', register.price);
			formData.append('author', register.author);
			formData.append('publisher', register.publisher);
			formData.append('condition', register.condition);
			formData.append('description', register.description);

			console.log(register.imgUrls);
			register.imgUrls.forEach((file, index) => {
				formData.append(`imgUrls`, file);
				console.log('각 사진 파일', file);
			});
			console.log('전달할 객체 이미지', formData.imgUrls);
			await Register(formData);
			navigate('/product');
		} catch (err) {
			console.error(err);
		}
	}

	function handleImageChange(newUrls) {
		setRegister({
			...register,
			imgUrls: newUrls,
		});
	}

	async function tempSave() {
		let dbReq = indexedDB.open('tempSave', 1);

		// if (dbReq) {
		// 	indexedDB.deleteDatabase('tempSave');
		// }
		// dbReq = indexedDB.open('tempSave', 1);
		// let db;
		// dbReq.onupgradeneeded = e => {
		// 	db = e.target.result;
		// };

		dbReq.addEventListener('success', function (e) {
			let db = e.target.result;

			const transaction = db.transaction(['productTemp'], 'readwrite');
			let store, request;

			if (transaction) {
				store = transaction.objectStore('productTemp');
			} else {
				db.createObjectStore('productTemp', {
					keyPath: 'id',
					autoIncrement: true,
				});
				const newTransaction = db.transaction(['productTemp'], 'readwrite');
				console.log({ newTransaction });
				store = newTransaction.objectStore('productTemp');
			}
			console.log({ store });
			request = store.put(register);
			console.log({ request });

			request.onsuccess = function () {
				console.log('임시 저장되었습니다.');
			};

			request.onerror = function (e) {
				console.error('Request error:', e.target.error);
				if (e.target.error instanceof DOMException && e.target.error.name == 'NotFoundError') {
					alert('임시저장에 실패했습니다 쿠키를 지우고 다시 시도하세요.');
				}
			};
		});
		dbReq.addEventListener('error', function (e) {
			const error = e.target.error;
			console.log('error', error.name);
			if (error instanceof DOMException && error.name == 'Uncaught DOMException') {
				alert('임시저장에 실패했습니다. 쿠키를 지우고 다시 시도하세요.');
			}
		});
		dbReq.addEventListener('upgradeneeded', function (e) {
			db = e.target.result;
			let oldVersion = e.oldVersion;
			if (oldVersion === 0) {
				db.createObjectStore('productTemp', {
					keyPath: 'id',
					autoIncrement: true,
				});
				dbReq.onerror = e => {
					console.log('fail', e);
				};
				dbReq.onsuccess = e => {
					console.log('성공');
					db = dbReq.result;
				};
			}
		});
	}

	return (
		<SetRegisterContext.Provider value={setRegister}>
			<RegisterContext.Provider value={register}>
				<RegisterBox
					encType="multipart/form-data"
					onSubmit={e => {
						e.preventDefault();
					}}
				>
					<Title>
						<TopTitle>상품 등록</TopTitle>
						<RedStar>*필수 항목</RedStar>
					</Title>
					{/* <Line>
						<hr />
					</Line> */}
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
		</SetRegisterContext.Provider>
	);
}

export default WriteForm;
