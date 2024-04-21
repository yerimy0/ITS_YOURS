import styled from 'styled-components';

const ModalWrap = styled.div`
	z-index: 5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${({ open }) => (open ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	display: flex;
	width: 500px;
	height: 720px;
	padding: 20px 20px 30px 20px;
	border-radius: 20px;
	background: #d4d4d4;
	box-shadow: 20px 20px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
`;

const Text = styled.p`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	margin: 0;
`;
const ReportUl = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 20px;
	flex-wrap: wrap;
	margin: 0;
	padding: 10px 0;
`;
const ReportLi = styled.li`
	width: 100%;
	display: flex;
	border-radius: 20px;
	background: #fff;
	padding: 8px 6px;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 26px;
	cursor: pointer;
	transition:
		background-color 0.3s,
		color 0.3s;
	&:hover {
		background-color: #79747e;
		color: #fff;
	}
	&.active {
		background-color: #79747e;
		color: #fff;
	}
`;
const Buttons = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-grow: 1;
`;

const CancelButton = styled.button`
	display: flex;
	width: auto;
	height: auto;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #fff;
	color: #009dff;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
`;

const OkButton = styled.button`
	display: flex;
	width: auto;
	height: auto;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border: 1px solid #009dff;
	border-radius: 20px;
	background: #009dff;
	color: #fff;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	text-align: center;
	white-space: nowrap;
`;

export {
	ModalWrap,
	ModalContent,
	Title,
	Text,
	ReportUl,
	ReportLi,
	Buttons,
	CancelButton,
	OkButton,
};
