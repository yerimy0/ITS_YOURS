import styled from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-self: stretch;
	align-items: center;
`;

const HeaderTop = styled.div`
	display: flex;
	height: 373px;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 20px 150px;
	align-self: stretch;
	flex-wrap: wrap;
`;

const MainTitle = styled.div`
	display: flex;
`;

const HeaderTitle = styled.p`
	padding: 0 0;
	margin: 0 0;
	color: #000;
	font-family: SUIT;
	font-size: 64px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

const HeaderTitleBlue = styled(HeaderTitle)`
	color: var(--main_blue, #009dff);
`;
const Line = styled.div`
	width: 900px;
	height: 30px;
	align-self: center;
`;
const HeaderLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 22px;
`;
const Button = styled.button`
	border-radius: 20px;
	border: 1.5px solid #009dff;
	background: #fff;
	font-weight: 700;
	color: #009dff;
	text-align: center;
	font-family: SUIT;
	padding: 10px 20px;
`;
const ListOfOne = styled.div`
	display: flex;
	width: 73%;
	margin: 5px 23%;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-end;
	gap: 28px;
	align-self: stretch;
`;

const ListRight = styled(ListOfOne)`
	width: 40%;
`;
const LeftBottom = styled.div`
	display: flex;
	align-items: center;
`;

const ListTitle = styled.div`
	color: #000;
	font-family: SUIT;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px; /* 127.273% */
`;

const ListSub = styled.div`
	width: 150%;
	color: #666;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px; /* 150% */
`;

const ListLeft = styled.div`
	flex-wrap: wrap;
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
`;

const ButtonBox = styled.div`
	width: 55%;
`;

const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 20px;
`;

const Comment = styled.div`
	gap: 10px;
	display: flex;
	font-size: 40px;
	align-items: center;
	flex-direction: row;
`;
const Label = styled.label`
	display: flex;
`;

const SendBtn = styled.button`
	font-size: 20px;
`;

export {
	Box,
	Comment,
	HeaderTitle,
	HeaderTitleBlue,
	MainTitle,
	HeaderTop,
	Line,
	HeaderLeft,
	Button,
	ListOfOne,
	LeftBottom,
	ListTitle,
	ListSub,
	ListLeft,
	List,
	ButtonBox,
	Img,
	ListRight,
	Label,
	SendBtn,
};
