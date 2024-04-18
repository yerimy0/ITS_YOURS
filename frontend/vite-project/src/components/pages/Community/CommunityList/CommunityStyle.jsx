import styled from 'styled-components';

const Box = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;

	.header_logo {
		width: 350px;
	}

	h5 {
		text-align: left;
		font-size: 18px;
		font-weight: 400;
		margin-top: 30px;
	}

	.comm_list_wrap {
		min-height: 400px;
	}
	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 15px;
		.header_logo {
			width: 40%;
			position: absolute;
			top: -15%;
			right: 0%;
			z-index: -1;
		}
		h5 {
			width: 100%;
			display: block;
		}
	}
`;

const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px 100px;
	border-bottom: 1px solid #eee;
	@media (max-width: 1000px) {
		padding: 15px;
		margin-top: 30px;
		box-sizing: border-box;
		display: block;
		position: relative;
	}
`;

const MainTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

const HeaderTitle = styled.p`
	text-align: left;
	font-size: 64px;
	font-weight: 900;
	@media (max-width: 1000px) {
		font-size: 30px;
	}
`;

const HeaderTitleBlue = styled(HeaderTitle)`
	color: var(--main_blue, #009dff);
`;
const Line = styled.div``;
const HeaderLeft = styled.div`
	width: 65%;
	@media (max-width: 1000px) {
		width: 100%;
	}
`;
const Button = styled.button`
	border-radius: 20px;
	border: 1px solid #009dff;
	background: #fff;
	font-weight: 500;
	font-size: 16px;
	color: #009dff;
	padding: 10px 20px;

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}
	@media (max-width: 1000px) {
		padding: 5px 10px;
		font-size: 14px;
	}
`;
const ListOfOne = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5px;
	cursor: pointer;
	margin-bottom: 10px;

	@media (max-width: 1000px) {
		/* display: block; */
		align-items: flex-end;
		.list_border {
			border-bottom: 1px solid #ddd;
		}
	}
`;

const ListRight = styled(ListOfOne)`
	display: flex;
	align-items: end;
	gap: 10px;
	justify-content: end;
	padding: 0;
	margin: 0;

	.comment_icon {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 1000px) {
		width: auto;
	}
`;
const LeftBottom = styled.div`
	display: flex;
`;

const ListTitle = styled.div`
	font-size: 22px;
	margin-bottom: 8px;
	@media (max-width: 1000px) {
		font-size: 16px;
		font-weight: 500;
	}
`;

const ListSub = styled.div`
	font-size: 16px;
	color: #666;
	margin-bottom: 8px;

	&:first-child {
		width: 30%;
	}
`;

const ListLeft = styled.div`
	width: 80%;
	text-align: left;
	@media (max-width: 1000px) {
		/* width: 100%; */
	}
`;

const List = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
`;

const ButtonBox = styled.div`
	width: 100%;
	text-align: end;
	padding: 50px 0;
	border-bottom: 1px solid #eee;
	@media (max-width: 1000px) {
		padding: 15px 0;
		border-bottom: 1px solid #ddd;
	}
`;

const Img = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	@media (max-width: 1000px) {
		display: none;
	}
`;

const Comment = styled.div`
	display: flex;
	align-items: top;
	gap: 5px;

	.listsub {
		font-size: 14px;
		color: #666;
	}

	.comm_list_img {
	}
`;
const Label = styled.label`
	// display: flex;
`;

const SendBtn = styled.button`
	// font-size: 20px;
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
