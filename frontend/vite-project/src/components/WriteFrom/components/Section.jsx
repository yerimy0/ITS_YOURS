import { Box, Sentence, RedStar, Label, Input, StateButtons, SmallButton } from '../WriteFormStyle';

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
			{label == '상품명' && <SmallButton className="Button">도서검색</SmallButton>}
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

function Section4() {
	return (
		<Box>
			<Sentence>
				<RedStar>*</RedStar>
				<Label>상품 상태</Label>
			</Sentence>
			<StateButtons>
				<SmallButton className="Button"> 새상품</SmallButton>
				<SmallButton className="Button">거의 새것</SmallButton>
				<SmallButton className="Button">중고</SmallButton>
			</StateButtons>
		</Box>
	);
}
// 방법1) 뭘누르든 하나의 상태관리로 3개를 식별할 수 있는 id를 줘서 1을 주면 class 에 active 주고 색도 주기  // 걍 state 1개로
// 방법2) onClickcapturing - 내가 누른 타켓을 지칭해주는 ... onClick 한번만 달면됨

export { Section, Section2, Section3, Section4 };
