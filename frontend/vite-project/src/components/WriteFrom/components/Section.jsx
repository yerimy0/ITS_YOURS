import {
	Box,
	Sentence,
	RedStar,
	Label,
	Input,
	StateButtons,
	SmallButton,
	InputContent,
	SearchContainer,
	SearchtItem,
} from '../WriteFormStyle';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RegisterContext, SetRegisterContext } from '../index';
import { GetBookInfo } from '../../../apis/service/product.api';

function Section({ label, onChange, value, name }) {
	const { id } = useParams();
	const setRegister = useContext(SetRegisterContext);

	const [books, setBooks] = useState([]); // 알라딘을 통한 검색 도서 리스트
	const [inputFocused, setInputFocused] = useState(false); // 필수값 입력 여부 확인
	const [buttonValid, setButtonValid] = useState(false); // 검색 가능 여부
	const [listOut, setlistOut] = useState(false); // 검색 결과 산출 div 보임 여부
	const [selectBook, setSelectBook] = useState({
		// 알라딘을 통해 선택된 도서의 정보 (제목, 저자, 출판사, 커버사진)
		title: '',
		author: '',
		publisher: '',
		cover: '',
	});

	async function handleSearch() {
		// 알라딘을 통한 도서 검색 GET
		const datas = await GetBookInfo(value);
		setBooks(datas);
		setlistOut(true);
	}

	// 검색된 도서 클릭 후, input에 저장하기
	async function handleClick(e) {
		const index = parseInt(e.target.getAttribute('data-id'));
		const data = books[index];
		console.log(data.title);
		setSelectBook({
			title: data.title,
			author: data.author,
			publisher: data.publisher,
			cover: data.cover,
		});
		setRegister({
			name: data.title,
			author: data.author,
			publisher: data.publisher,
			imgUrls: [data.cover, '', ''],
		});
		console.log(data.cover);
		setlistOut(false);
	}

	// 도서 검색부분 공백일 경우, 버튼 비활성화 처리
	useEffect(() => {
		setButtonValid(value !== '');
	}, [value]);

	// 입력값이 숫자인지 판별 (가격 부분)
	const isSalePriceValid = isNaN(value);

	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>{label}</Label>
			</Sentence>
			<Input
				className="Medium"
				placeholder={label + '을 입력해주세요'}
				onChange={onChange}
				value={value}
				name={name}
				onBlur={() => setInputFocused(true)}
				onFocus={() => setInputFocused(false)}
			/>
			{label === '판매가' && !value && inputFocused && <RedStar>{label}를 입력해주세요.</RedStar>}
			{label === '도서명' && !value && inputFocused && <RedStar>{label}을 입력해주세요.</RedStar>}
			{isSalePriceValid && label === '판매가' && <RedStar>판매가는 숫자로만 입력해주세요.</RedStar>}
			{id == undefined && label == '도서명' && (
				<>
					<SmallButton className="Button" onClick={handleSearch} disabled={!buttonValid}>
						도서검색
					</SmallButton>
					<SearchContainer style={{ display: listOut ? 'block' : 'none' }}>
						{books.map((book, i) => (
							<SearchtItem key={i} data-id={i} onClick={handleClick}>
								{book.title}
								<hr />
							</SearchtItem>
						))}
					</SearchContainer>
				</>
			)}
		</Box>
	);
}

function Section2({ label, onChange, value, name }) {
	const [inputFocused, setInputFocused] = useState(false); // 필수값 입력 여부 확인
	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>{label}</Label>
			</Sentence>
			<Input
				className="Small"
				placeholder={label + '를 입력해주세요'}
				onChange={onChange}
				value={value}
				name={name}
				onBlur={() => setInputFocused(true)}
				onFocus={() => setInputFocused(false)}
			/>
			{label === '출판사' && !value && inputFocused && <RedStar>{label}를 입력해주세요.</RedStar>}
			{label === '저자' && !value && inputFocused && <RedStar>{label}를 입력해주세요.</RedStar>}
		</Box>
	);
}

function Section3({ label, onChange, value, name }) {
	const [inputFocused, setInputFocused] = useState(false); // 필수값 입력 여부 확인
	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>{label}</Label>
			</Sentence>
			<InputContent
				placeholder={label + '을 입력해주세요'}
				onChange={onChange}
				value={value}
				name={name}
				onBlur={() => setInputFocused(true)}
				onFocus={() => setInputFocused(false)}
			/>
			{!value && inputFocused && <RedStar>{label}를 입력해주세요.</RedStar>}
		</Box>
	);
}

function Section4({ value }) {
	const [active, setActive] = useState(value);
	const register = useContext(RegisterContext);
	const setRegister = useContext(SetRegisterContext);

	useEffect(() => {
		setActive(value);
	}, [value]);

	function onButtonClick(e) {
		const { value } = e.target;
		setActive(value);
		setRegister({ ...register, condition: value });
	}
	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>상품 상태</Label>
			</Sentence>
			<StateButtons onClickCapture={onButtonClick}>
				<SmallButton className={`Button ${active == '새상품' ? 'active' : ''}`} value="새상품">
					새상품
				</SmallButton>
				<SmallButton
					className={`Button ${active == '거의 새것' ? 'active' : ''}`}
					value="거의 새것"
				>
					거의 새것
				</SmallButton>
				<SmallButton className={`Button ${active == '중고' ? 'active' : ''}`} value="중고">
					중고
				</SmallButton>
			</StateButtons>
			{!value && <RedStar>상품 상태를 입력해주세요.</RedStar>}
		</Box>
	);
}

export { Section, Section2, Section3, Section4 };
