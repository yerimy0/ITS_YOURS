import {
	Buttons,
	Button,
	UserImg,
	Writer,
	Date,
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
} from '../CommunityDetail/DetailStyle';
import { useState, useEffect } from 'react';
import { Line } from '../CommunityList/CommunityStyle';
import { Getcommets } from '../../../../apis/service/community.api';
import detailDate from '../../../../utils/writeTime';

function CommentSection({ id }) {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		async function getComments() {
			const res = await Getcommets(id);
			setComments(res);
		}
		getComments();
	}, []);
	return (
		<CommentsBox>
			<CommentList>
				<CommentNum>4개의 댓글</CommentNum>
				<Comments>
					{comments.map((comment, i) => (
						<EachCommet key={`comment-${i}`} comment={comment} />
					))}
				</Comments>
			</CommentList>
			<CommentInput />
		</CommentsBox>
	);
}

function EachCommet({ comment }) {
	const time = detailDate(comment.createdAt);
	return (
		<EachComment>
			<Comment>
				<UserImg src={comment.profilePic}></UserImg>
				<CommentTexts>
					<InnerTop>
						<Writer>{comment.nickName}</Writer>
						<Date>{time}</Date>
					</InnerTop>
					<InnerBottom>
						<CommentContext>
							<p>{comment.content}</p>
						</CommentContext>
						<Buttons>
							<Button>수정</Button>
							<Button>삭제</Button>
						</Buttons>
					</InnerBottom>
				</CommentTexts>
			</Comment>
			<Line>
				<hr />
			</Line>
		</EachComment>
	);
}

export default CommentSection;
