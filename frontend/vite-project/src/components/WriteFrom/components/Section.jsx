import { Box, Sentence, RedStar, Label, Input, StateButtons, SmallButton } from '../WriteFormStyle';
import { useState, useContext, useEffect } from 'react';
import { SetRegisterContext, RegisterContext } from '../index';
function Section({ label, onChange, value, name }) {
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
			{label == '도서명' && <SmallButton className="Button">도서검색</SmallButton>}
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
			<Input
				className="Large"
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

	useEffect(() => {
		setActive(value);
	});
	const register = useContext(RegisterContext);
	const setRegister = useContext(SetRegisterContext);

	function onButtonClick(e) {
		const { value } = e.target;
		setActive(value);
		setRegister({ ...register, prodStatus: value });
	}

	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>상품 상태</Label>
			</Sentence>
			<StateButtons onClickCapture={onButtonClick}>
				<SmallButton className={`Button ${active === '새상품' ? 'active' : ''}`} value="새상품">
					새상품
				</SmallButton>
				<SmallButton
					className={`Button ${active === '거의 새것' ? 'active' : ''}`}
					value="거의 새것"
				>
					거의 새것
				</SmallButton>
				<SmallButton className={`Button ${active === '중고' ? 'active' : ''}`} value="중고">
					중고
				</SmallButton>
			</StateButtons>
		</Box>
	);
}

export { Section, Section2, Section3, Section4 };
