import styled from 'styled-components';

const RegisterBox = styled.div`
	left: 263px;
	display: flex;
	align-items: center;
	width: auto;
	padding: 70px 30px;
	flex-direction: column;
	justify-content: center;

	gap: 30px;
	/* margin-left: 40vh; */
	margin: 0 auto;

	.Button {
		border-radius: 10px;
		border: 1px solid #009dff;
		background: #fff;
		color: #009dff;
		text-align: center;
		/* font-family: SUIT; */
		font-style: normal;
		display: flex;
		padding: 8px;
		justify-content: center;
		align-items: center;
		gap: 8px;

		&:hover {
			border: 1px solid #009dff;
			background-color: #009dff;
			color: #fff;
			transition: all 0.5s;
		}

		@media (max-width: 1000px) {
			font-size: 14px;
		}
	}

	input::placeholder {
		font-size: 18px;
		color: #888;
		font-weight: 400;
		line-height: normal;
		padding: 0px 5px;
		flex: 1 0 0;
		align-items: flex-start;
	}

	@media (max-width: 1000px) {
		padding: 15px;
		box-sizing: border-box;
		margin-top: 30px;
	}
`;

const Notion = styled.span`
	font-size: 14px;
	margin-left: 10px;
	line-height: 100%;
	margin-left: 10px;
`;

const MainContent = styled.div`
	gap: 30px;
	display: contents;
`;
const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const Sentence = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 5px;
	align-items: center;
`;

const Title = styled.div`
	display: flex;
	/* width: 211px; */
	align-items: center;
	gap: 5px;
	margin-bottom: 20px;
`;

const RedStar = styled.span`
	color: #b3261e;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	@media (max-width: 1000px) {
		font-size: 14px;
		line-height: 100%;
	}
`;
const TopTitle = styled.span`
	text-align: center;
	font-size: 28px;
	font-weight: 700;
	line-height: 36px; /* 128.571% */
`;

const Line = styled.div`
	width: 854px;
	height: 2px;
`;

const Input = styled.input`
	border-radius: 10px !important;
	border: 1px solid #eee;
	background: #fff;
	padding: 8px;
	/* width: ${({ className }) => (className === 'Small' ? '386px' : '838px')};
	height: ${({ className }) => {
		if (className === 'Large') return '175px';
		else return '35px';
	}}; */
	width: 100%;
`;
const InputContent = styled.textarea`
	border-radius: 10px !important;
	border: 1px solid #eee;
	background: #fff;
	padding: 8px;
	width: 100%;
	min-height: 100px;
`;

const Label = styled.span`
	font-size: 18px;
	line-height: 28px;
	@media (max-width: 1000px) {
		line-height: 100%;
		font-size: 16px;
	}
`;

const RegButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 45px;
	width: 60%;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;

const StateButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: normal;
	gap: 5%;
	align-items: center;
	/* align-self: stretch; */
	button {
		font-size: 16px;
		font-weight: 500;
		line-height: 28px; /* 127.273% */
	}
`;

const ProductTwoInput = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;
	width: 60%;
	@media (max-width: 1000px) {
		width: 100%;
		flex-direction: column;
		gap: 20px;
	}
`;

const SmallButton = styled.button`
	font-weight: 500;
	width: 20%;
	margin: 10px 0;

	&.active {
		color: #fff;
		background: #009dff;
	}

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}
`;
const BigButton = styled.button`
	font-size: 18px;
	width: 50%;
	@media (max-width: 1000px) {
		font-size: 16px;
	}
`;
const Img = styled.img`
	display: flex;
	width: 200px;
	height: 200px;
	align-items: flex-start;
	gap: 8px;
`;

const ProductImg = styled.div`
	display: flex;
	align-items: flex-end;
	align-content: flex-end;
	gap: 25px;
	flex-wrap: wrap;
`;

const ButtonUpload = styled.button`
	cursor: pointer;
	font: inherit;
	min-height: 48px;
	min-width: 48px;
	border: none;
	background-color: #fff;
`;

const SearchContainer = styled.div`
	max-height: 200px;
	overflow-y: auto;
	border: 1px solid #eee;
	border-radius: 10px !important;
	padding: 10px;
`;

const SearchtItem = styled.div`
	cursor: pointer;
	margin-bottom: 5px;
	padding: 5px;
	background-color: #f9f9f9;
	border-radius: 10px !important;

	&:hover {
		background-color: #eaeaea;
	}

	hr {
		margin: 5px 0;
		border: 0;
		border-top: 1px solid #ccc;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	background-color: transparent;
	font-size: 20px;
	cursor: pointer;
	transition: font-size 0.2s;

	&:hover {
		color: grey;
		font-size: 24px;
	}
`;

export {
	RegisterBox,
	Box,
	Title,
	Notion,
	RedStar,
	TopTitle,
	Line,
	Input,
	Label,
	StateButtons,
	RegButtons,
	MainContent,
	Sentence,
	ProductTwoInput,
	SmallButton,
	BigButton,
	Img,
	ProductImg,
	ButtonUpload,
	InputContent,
	SearchContainer,
	SearchtItem,
	CloseButton,
	Alert,
};
