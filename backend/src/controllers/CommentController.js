const CommentService = require('../services/CommentService');
const {
	NotFoundError,
	BadRequestError,
	InternalServerError,
	ConflictError,
	ForbiddenError,
	UnauthorizedError,
} = require('../config/customError');

/**
 * 커뮤니티 댓글 작성 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 커뮤니티 댓글 작성 동작되는 DB작업을 모아놓은 service입니다.
 */
const createComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const nickName = req.user.nickName;
		const profilePic = req.user.profilePic;
		const { content } = req.body;

		if (!nickName) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		if(!content) {
			throw new BadRequestError('필수 내용을 입력 후 등록해주세요.');
		}
		const newComment = await CommentService.createComment(postId, content, nickName, profilePic);

		res.status(200).json(newComment);
	} catch (err) {
		next(err);
	}
};

/**
 * 커뮤니티 댓글 조회 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 커뮤니티 댓글 조회에 동작되는 DB작업을 모아놓은 service입니다.
 */
const getComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const getComment = await CommentService.getComment(postId);

		res.status(200).json(getComment);
	} catch (error) {
		next(error);
	}
};

/**
 * 댓글 수정 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-09
 * 댓글 수정에 필요한 동작들을 모아놓은 controller입니다.
 */
const updateComment = async (req, res, next) => {
	try {
		const { commentId } = req.params;
		const { content } = req.body;

		const updateResult = await CommentService.updateComment(commentId, content);

		if (!updateComment) {
			throw new BadRequestError('댓글을 찾을 수 없습니다.');
		}
		res.status(200).json(updateResult);
	} catch (err) {
		next(err);
	}
};

/**
 * 댓글 삭제 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-08
 * 댓글 삭제에 필요한 동작들을 모아놓은 controller입니다.
 */
const deleteComment = async (req, res) => {
	try {
		const { commentId } = req.params;

		const deleteComment = await CommentService.deleteComment(commentId);

		if (!deleteComment) {
			throw new BadRequestError('댓글을 찾을 수 없습니다.');
		}
		res.status(200).json({ message: '댓글이 성공적으로 삭제되었습니다.', deleteComment });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { updateComment, deleteComment, createComment, getComment };
