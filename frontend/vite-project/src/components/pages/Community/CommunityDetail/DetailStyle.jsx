import styled from 'styled-components';

const DetailBox = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	padding: 30px;
	flex-direction: column;
	align-items: flex-start;
	gap: 57px;
	box-shadow:
		0 10px 20px rgba(0, 0, 0, 0.09),
		0 6px 6px rgba(0, 0, 0, 0.02);
	border-radius: 20px;
	margin-top: 50px;

	.commu_detail_title {
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	@media (max-width: 860px) {
		padding: 20px;
		.commu_detail_title {
			font-size: 20px;
			font-weight: 600;
			word-break: break-all;
		}

		.commu_detail_wrap {
			width: 50%;
		}
	}

	.commu_title_box {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}

	.send_btn {
		width: auto;
		padding-right: 20px;
	}
	@media (max-width: 865px) {
		width: 90%;
	}
`;

const DetailTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;

const TitleBox = styled.div`
	/* display: flex;
	justify-content: space-between;
	align-items: flex-end;
	align-self: stretch; */
`;

const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
`;

const Button = styled.button`
	background-color: #fff;
	border: none;
	color: #666;

	text-align: right;
	font-family: SUIT;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px; /* 142.857% */
`;

const Red = styled(Button)`
	color: #b3261e;
`;

const UserImg = styled.img`
	width: 56px;
	height: 56px;
	object-fit: cover;
	border-radius: 56px;
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const UsernDate = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const Writer = styled.p`
	margin: 0 0;
	color: #000;

	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px; /* 127.273% */
`;
const Date = styled.p`
	margin: 0 0;
	color: #666;

	font-size: 12px;

	line-height: 24px; /* 150% */
`;

const ContentBox = styled.div`
	display: flex;
	padding: 10px 0px;
	align-items: center;
	gap: 4px;
	align-self: stretch;
`;
const Content = styled(Writer)`
	font-weight: 400;
	font-size: 18px;
	white-space: pre-line;
`;

const CommentsBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 40px;
	align-self: stretch;
`;

const CommentList = styled(CommentsBox)`
	gap: 20px;
`;

const CommentInput = styled.input`
	/* width: 800px;
	display: flex;
	height: 50px;
	padding: 8px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 20px;
	border: 1px solid #888;
	margin-right: 15px; */
	width: 95%;
	padding: 10px 0 10px 20px;
	font-size: 16px;

	/* background: #fff;
	&:focus {
		border: 1px solid var(--main_blue, #009dff);
	} */
`;

const CommentNum = styled(Writer)`
	font-size: 18px;
	font-weight: 400;
`;

const Comments = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	align-self: stretch;
`;
const Comment = styled(Comments)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
`;
const EachComment = styled(Comments)`
	justify-content: center;
	gap: 10px;
`;

const CommentTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	flex: 1 0 0;
`;
const InnerTop = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
	/* align-self: stretch; */
`;
const InnerBottom = styled(InnerTop)`
	/* height: 50px; */
	/* justify-content: space-between; */
`;

const CommentContext = styled.div`
	display: flex;
	/* height: 24px; */
	align-items: center;
	gap: 4px;
	p {
		font-size: 16px;
		/* height: auto; */
	}

	@media (max-width: 500px) {
		width: 56%;
		/* height: 24px; */
	}
`;

export {
	DetailBox,
	DetailTop,
	TitleBox,
	Buttons,
	Button,
	Red,
	UserImg,
	Profile,
	UsernDate,
	Writer,
	Date,
	Content,
	ContentBox,
	CommentsBox,
	CommentInput,
	CommentNum,
	Comments,
	EachComment,
	CommentTexts,
	InnerTop,
	InnerBottom,
	Comment,
	CommentContext,
	CommentList,
};
