const CommentService = require('../services/CommentService');

const createComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const nickName = req.user.nickName;
		const { content, profilePic } = req.body;

		const newComment = await CommentService.createComment(postId, content, nickName, profilePic);

		res.status(200).json({ data: newComment });
	} catch (err) {
		next(err);
	}
};

const getComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		console.log(req.params);
		const getComment = await CommentService.getComment(postId);

		res.status(200).json({ data: getComment });
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
			return res.status(400).json({ message: '댓글을 찾을 수 없습니다.' });
		}
		res.status(200).json({
			date: updateResult,
		});
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
			return res.status(400).json({ message: '댓글을 찾을 수 없습니다' });
		}
		res.status(200).json({ message: '댓글이 성공적으로 삭제되었습니다.', deleteComment });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { updateComment, deleteComment, createComment, getComment };
