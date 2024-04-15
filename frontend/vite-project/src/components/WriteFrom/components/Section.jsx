import {
	Box,
	Sentence,
	RedStar,
	Label,
	Input,
	StateButtons,
	SmallButton,
	InputContent,
} from '../WriteFormStyle';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RegisterContext } from '../index';
import { GetBookInfo } from '../../../apis/service/product.api';

function Section({ label, onChange, value, name }) {
	const { id } = useParams();
	const setRegister = useContext(RegisterContext);

	const [books, setBooks] = useState([]);
	const [buttonValid, setButtonValid] = useState(false);
	const [listOut, setlistOut] = useState(true);
	const [selectBook, setSelectBook] = useState({
		title: '',
		author: '',
		publisher: '',
		cover: '',
	});

	async function handleSearch() {
		const datas = await GetBookInfo(value);
		setBooks(datas);
	}

	async function handleClick(e) {
		const id = parseInt(e.target.getAttribute('data-id'));
		// console.log(books[id]);
		const data = books[id];
		// console.log(data.title);
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
		setlistOut(false);
	}

	useEffect(() => {
		setButtonValid(value !== '');
	}, [value]);

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
			/>
			{id == undefined && label == '도서명' && (
				<>
					<SmallButton className="Button" onClick={handleSearch} disabled={!buttonValid}>
						도서검색
					</SmallButton>
					<div style={{ display: listOut ? 'block' : 'none' }}>
						{books.map((book, i) => (
							<div key={i} data-id={i} onClick={handleClick}>
								{book.title}
							</div>
						))}
					</div>
				</>
			)}
		</Box>
	);
}

function Section2({ label, onChange, value, name }) {
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
			/>
		</Box>
	);
}

function Section3({ label, onChange, value, name }) {
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
			/>
		</Box>
	);
}

function Section4({ value }) {
	const [active, setActive] = useState(value);
	const setRegister = useContext(RegisterContext);
	const register = useContext(RegisterContext);

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
		</Box>
	);
}

export { Section, Section2, Section3, Section4 };
