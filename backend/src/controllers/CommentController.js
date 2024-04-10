const CommentService = require('../services/CommentService');

const createComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const { content, userId } = req.body;
		// const email = req.decoded.user.email;
		const commentService = new CommentService();
		const newComment = await commentService.createComment(postId, content, userId);
		// const validateMember = await commentService.validateMember(email);

		// if (!validateMember) {
		// 	throw new Error('로그인어쩌고~~');
		// }

		// const newComment = await commentService.createComment({
		// 	postId,
		// 	content,
		// 	userId,
		// });

		res.status(200).json(newComment);
	} catch (err) {
		next(err);
	}
};

const getComment = async (req, res, next) => {
	try {
		const { postId } = req.params;
		console.log(req.params);
		const commentService = new CommentService();
		const getComment = await commentService.getComment(postId);

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
		const commentService = new CommentService();
		const updateResult = await commentService.updateComment(commentId, content);

		if (!updateComment) {
			return res.status(400).json({ message: '댓글을 찾을 수 없습니다.' });
		}
		res.status(200).json({
			message: '댓글이 성공적으로 수정되었습니다.',
			updateResult,
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

		const commentService = new CommentService();
		const deleteComment = await commentService.deleteComment(commentId);

		if (!deleteComment) {
			return res.status(400).json({ message: '댓글을 찾을 수 없습니다' });
		}
		res.status(200).json({ message: '댓글이 성공적으로 삭제되었습니다.', deleteComment });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
module.exports = { updateComment, deleteComment, createComment, getComment };
