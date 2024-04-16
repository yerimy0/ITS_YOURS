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
import { IoSend } from 'react-icons/io5';
import { Line, Label, SendBtn } from '../CommunityList/CommunityStyle';
import {
	Getcommets,
	PostComment,
	DeleteComment,
	UpdateComment,
} from '../../../../apis/service/community.api';
import Modal from '../../../Modal';
import detailDate from '../../../../utils/writeTime';

const GetCommentsContext = createContext();

function CommentSection({ id }) {
	const [comments, setComments] = useState([]); // 불러올 댓글 정보
	const [length, setLength] = useState(0); // 댓글 갯수
	const [newComment, setNewComment] = useState(''); // 새로 입력할 댓글

	useEffect(() => {
		getComments();
	}, []);

	// 댓글 목록 불러오기
	async function getComments() {
		const res = await Getcommets(id);
		setComments(res);
		setLength(res.length);
	}

	// 댓글 입력 input
	async function onChange(e) {
		setNewComment(e.target.value);
	}

	// 엔터를 통한 댓글 포스팅
	async function activeEnter(e) {
		if (e.key === 'Enter') {
			if (newComment.trim() === '') return;
			await PostComment(newComment, id);
			setNewComment('');
			await getComments();
		}
	}

	// 클릭을 통한 댓글 포스팅
	async function onClick() {
		if (newComment.trim() === '') return;
		await PostComment(newComment, id);
		setNewComment('');
		await getComments();
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
				<Label>
					<CommentInput
						value={newComment}
						onChange={onChange}
						onKeyDown={activeEnter}
						placeholder="댓글을 입력하세요"
					/>
					<SendBtn onClick={onClick}>
						<IoSend />
					</SendBtn>
				</Label>
			</CommentsBox>
		</GetCommentsContext.Provider>
	);
}

function Each({ comment, id }) {
	const getComments = useContext(GetCommentsContext); // 현재 댓글 목록 불러오기
	const [isEditing, setIsEditing] = useState(false); // 댓글 수정중인지 여부
	const [updatedComment, setUpdatedComment] = useState(comment.content); // 수정할 댓글 상태
	const [modalOpen, setModalOpen] = useState(false); // 삭제 관련 모달 표시 여부

	const time = detailDate(comment.createdAt); // 댓글 입력 시간 단위 (00전)

	// 클릭을 통한 댓글 수정 버튼
	async function onClickUpdate() {
		if (updatedComment.trim() === '') return;
		const commentId = comment._id;
		await UpdateComment(updatedComment, id, commentId);
		getComments();
		setIsEditing(false);
	}

	// 엔터를 통한 댓글 수정 버튼
	async function activeEnter(e) {
		if (e.key === 'Enter') {
			if (updatedComment.trim() === '') return;
			const commentId = comment._id;
			await UpdateComment(updatedComment, id, commentId);
			getComments();
			setIsEditing(false);
		}
	}

	// 수정 상태 업데이트
	async function handleEdit() {
		setIsEditing(true);
	}

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	// 댓글 삭제 버튼
	async function onClickDelete() {
		const commentId = comment._id;
		await DeleteComment(id, commentId);
		getComments();
		setModalOpen(false);
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
							<Button onClick={handleOpenModal}>삭제</Button>
						</Buttons>
						{modalOpen && (
							<Modal
								isOpen={handleOpenModal}
								onClose={handleCloseModal}
								title="댓글삭제"
								content="댓글을 정말 삭제하시겠습니까?"
								confirmText="삭제"
								onConfirm={onClickDelete}
							/>
						)}
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
