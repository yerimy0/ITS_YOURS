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
import {
	Getcommets,
	PostComment,
	DeleteComment,
	UpdateComment,
} from '../../../../apis/service/community.api';
import detailDate from '../../../../utils/writeTime';

const GetCommentsContext = createContext();

function CommentSection({ id }) {
	const [comments, setComments] = useState([]);
	const [length, setLength] = useState(0);
	const [newComment, setNewComment] = useState('');

	useEffect(() => {
		getComments();
	}, [id]);

	async function getComments() {
		const res = await Getcommets(id);
		setComments(res);
		setLength(res.length);
	}

	async function onChange(e) {
		setNewComment(e.target.value);
	}

	async function activeEnter(e) {
		if (e.key === 'Enter') {
			if (newComment.trim() === '') return;
			await postComment();
		}
	}

	async function postComment() {
		if (newComment.trim() !== '') {
			await PostComment(newComment, id);
			setNewComment('');
			getComments();
		}
	}

	return (
		<GetCommentsContext.Provider value={getComments}>
			<CommentsBox>
				<CommentList>
					<CommentNum>{`${length}개의 댓글`}</CommentNum>
					<Comments>
						{comments.map((comment, i) => (
							<Each key={`comment-${i}`} comment={comment} id={id} />
						))}
					</Comments>
				</CommentList>
				<CommentInput value={newComment} onChange={onChange} onKeyDown={activeEnter} />
			</CommentsBox>
		</GetCommentsContext.Provider>
	);
}

function Each({ comment, id }) {
	const getComments = useContext(GetCommentsContext);
	const [isEditing, setIsEditing] = useState(false);
	const [updatedComment, setUpdatedComment] = useState(comment.content);

	const time = detailDate(comment.createdAt);

	async function onClickDelete() {
		const commentId = comment._id;
		await DeleteComment(id, commentId);
		getComments();
	}

	async function onClickUpdate() {
		if (updatedComment.trim() === '') return;
		const commentId = comment._id;
		await UpdateComment(updatedComment, id, commentId);
		getComments();
		setIsEditing(false);
	}

	async function activeEnter(e) {
		if (e.key === 'Enter') {
			if (updatedComment.trim() === '') return;
			const commentId = comment._id;
			await UpdateComment(updatedComment, id, commentId);
			getComments();
			setIsEditing(false);
		}
	}

	async function handleEdit() {
		setIsEditing(true);
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
						{isEditing ? (
							<CommentInput
								value={updatedComment}
								onKeyDown={activeEnter}
								onChange={e => setUpdatedComment(e.target.value)}
							/>
						) : (
							<CommentContext>
								<p>{comment.content}</p>
							</CommentContext>
						)}
						<Buttons>
							{isEditing ? (
								<Button onClick={onClickUpdate}>확인</Button>
							) : (
								<Button onClick={handleEdit}>수정</Button>
							)}
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
