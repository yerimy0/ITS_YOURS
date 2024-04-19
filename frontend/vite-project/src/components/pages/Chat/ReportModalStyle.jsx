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
	padding: 25px 0 0;
	border-radius: 20px;
	background: #fff;
	box-shadow: 20px 20px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 5px;
`;

const Text = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #555;
	margin-bottom: 20px;
`;
const ReportUl = styled.ul`
	width: 100%;
	display: block;
	text-align: center;
	margin-bottom: 10px;
`;
const ReportLi = styled.li`
	font-size: 18px;
	padding: 15px 0;
	width: 100%;

	&:hover {
		background: #fafafa;
		cursor: pointer;
		color: #009dff;
		font-weight: 500;
	}

	@media (max-width: 500px) {
	}
`;
const Buttons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-top: 1px solid #eee;

	@media (max-width: 500px) {
	}
`;

const CancelButton = styled.button`
	width: 50%;
	border-right: 1px solid #eee;
	padding: 25px 0;
	font-size: 18px;
	color: #009dff;
	font-weight: 500;
	border-bottom-left-radius: 20px;

	&:hover {
		background: #fafafa;
		color: #038ee5;
		transition: all 0.5s;
	}

	@media (max-width: 500px) {
		font-size: 16px;
		padding: 25px 0;
	}
`;

const OkButton = styled.button`
	width: 50%;
	text-align: center;
	padding: 25px 0;
	font-size: 18px;
	color: #009dff;
	font-weight: 500;
	border-bottom-right-radius: 20px;

	&:hover {
		background: #fafafa;
		color: #038ee5;
		transition: all 0.5s;
	}

	@media (max-width: 500px) {
		font-size: 16px;
		padding: 25px 0;
	}
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
