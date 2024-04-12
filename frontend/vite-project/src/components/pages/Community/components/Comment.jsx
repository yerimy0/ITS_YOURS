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
import { useState, useEffect, useContext, createContext } from 'react';
import { Line } from '../CommunityList/CommunityStyle';
import { Getcommets, PostComment, DeleteComment } from '../../../../apis/service/community.api';
import detailDate from '../../../../utils/writeTime';

const GetCommentsContext = createContext();

function CommentSection({ id }) {
	const [comments, setComments] = useState(['']);
	const [length, setLength] = useState(0);
	const [newComment, setNewComment] = useState('');

	async function getComments() {
		const res = await Getcommets(id);
		setComments(res);
		setLength(res.length);
	}

	useEffect(() => {
		getComments();
	}, [id]);

	function onChange(e) {
		setNewComment(e.target.value);
	}

	async function activeEnter(e) {
		if (e.key === 'Enter') {
			if (newComment.trim() === '') return;
			await PostComment(newComment, id);
			setNewComment('');
			await getComments();
		}
	}
	return (
		<GetCommentsContext.Provider value={getComments}>
			<CommentsBox>
				<CommentList>
					<CommentNum>{`${length}개의 댓글`}</CommentNum>
					<Comments>
						{comments.map((comment, i) => (
							<EachCommet key={`comment-${i}`} id={id} comment={comment} />
						))}
					</Comments>
				</CommentList>
				<CommentInput value={newComment} onChange={onChange} onKeyDown={e => activeEnter(e)} />
			</CommentsBox>
		</GetCommentsContext.Provider>
	);
}

function EachCommet({ comment, id }) {
	const getComments = useContext(GetCommentsContext);
	const time = detailDate(comment.createdAt);

	async function onClickDelete(id) {
		const commentId = comment._id;
		await DeleteComment(id, commentId);
		await getComments();
	}
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
							<Button onClick={onClickDelete}>삭제</Button>
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
