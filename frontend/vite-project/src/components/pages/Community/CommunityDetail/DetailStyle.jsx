import styled from 'styled-components';

const DetailBox = styled.div`
	margin: 0 20%;
	display: flex;
	width: auto;
	padding: 30px;
	flex-direction: column;
	align-items: flex-start;
	gap: 57px;
`;

const DetailTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	align-self: stretch;
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
	border-radius: 56px;
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	align-self: stretch;
`;

const UsernDate = styled.div`
	display: flex;
	padding: 0px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
	flex: 1 0 0;
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
	font-weight: 700;
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
	display: flex;
	height: 35px;
	padding: 8px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 20px;
	border: 1px solid #888;

	background: #fff;
	&:focus {
		border: 1px solid var(--main_blue, #009dff);
	}
`;

const CommentNum = styled(Writer)`
	font-size: 24px;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
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
	display: flex;
	align-items: center;
	gap: 8px;
	align-self: stretch;
`;
const InnerBottom = styled(InnerTop)`
	height: 50px;
	justify-content: space-between;
`;

const CommentContext = styled.div`
	display: flex;
	height: 24px;
	align-items: center;
	gap: 4px;
	p {
		color: #000;
		font-family: SUIT;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px; /* 150% */
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
