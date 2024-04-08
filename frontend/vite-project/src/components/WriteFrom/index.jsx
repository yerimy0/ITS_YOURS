import { useParams } from 'react-router-dom';
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
// import { useDispatch, useSelector } from 'react-redux';
// import { onChange, handleImageChange } from '../../store';
// import tempSave from '../../utils/tempSave'

export let RegisterContext = createContext();
export let SetRegisterContext = createContext(() => {});

function WriteForm() {
	// const register = useSelector(state => {
	// 	return state.register;
	// });
	// let dispatch = useDispatch();
	const { id } = useParams();
	console.log(id);
	const [register, setRegister] = useState({
		prodName: '',
		prodPrice: 0,
		prodAuth: '',
		prodPub: '',
		prodStatus: '',
		prodDisc: '',
		uploadImgUrls: ['', '', ''],
	});

	const { prodName, prodPrice, prodAuth, prodPub, prodStatus, prodDisc, uploadImgUrls } = register;

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

	// function onChange(e) {
	// 	const { value, name } = e.target;
	// 	dispatch(onChange({ name, value }));
	// }

	function handleImageChange(newUrls) {
		setRegister({
			...register,
			uploadImgUrls: newUrls,
		});
	}

	// function handleImageChange(newUrls) {
	// 	dispatch(handleImageChange(newUrls));
	// }

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
		<SetRegisterContext.Provider value={setRegister}>
			<RegisterContext.Provider value={register}>
				<RegisterBox>
					<Title>
						{id === undefined ? <TopTitle>상품 등록</TopTitle> : <TopTitle>상품 수정</TopTitle>}
						<RedStar>*필수 항목</RedStar>
					</Title>
					<Line>
						<hr />
					</Line>
					<MainContent>
						<InputImg onImageChange={handleImageChange} value={uploadImgUrls} />
						<Section label={'도서명'} onChange={onChange} value={prodName} name="prodName" />
						<Section label={'판매가'} onChange={onChange} value={prodPrice} name="prodPrice" />
						<ProductTwoInput>
							<Section2 label={'출판사'} onChange={onChange} value={prodPub} name="prodPub" />
							<Section2 label={'저자'} onChange={onChange} value={prodAuth} name="prodAuth" />
						</ProductTwoInput>
						<Section3 label={'상품 설명'} onChange={onChange} value={prodDisc} name="prodDisc" />
						<Section4 value={prodStatus} />
					</MainContent>
					<RegButtons>
						<BigButton className="Button" onClick={tempSave}>
							임시저장
						</BigButton>
						{id === undefined ? (
							<BigButton className="Button">등록하기</BigButton>
						) : (
							<BigButton className="Button">수정하기</BigButton>
						)}
					</RegButtons>
				</RegisterBox>
			</RegisterContext.Provider>
		</SetRegisterContext.Provider>
	);
}

export default WriteForm;
