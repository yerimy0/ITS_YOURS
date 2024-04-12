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
import { PostComment } from '../../../../apis/service/community.api';

function CommentSection({ id }) {
	const [comments, setComments] = useState(['']);

	function onChange(e) {
		setComments([...comments], e.target.value);
	}

	async function activeEnter(e) {
		if (e.key === 'Enter') {
			const res = await PostComment(comments, id);
		}
	}
	useEffect(() => {
		async function getComments() {
			const res = await Getcommets(id);
			console.log(`댓글 가져오기: ${res}`);
			// setComments(res.data);
		}
		getComments();
	}, []);
	return (
		<CommentsBox>
			<CommentList>
				<CommentNum>{`${comments.length}개의 댓글`}</CommentNum>
				<Comments>
					{comments.map((comment, i) => (
						<EachCommet key={`comment-${i}`} comment={comment} />
					))}
				</Comments>
			</CommentList>
			<CommentInput onChange={onChange} onKeyDown={e => activeEnter(e)} />
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
