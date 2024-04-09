const { Comments } = require('../models');

class CommentService {
	async createComment(postId, content, userId) {
		const newComment = {
			postId: postId,
			content: content,
			userId: userId,
			createdAt: new Date(),
		};
		const comment = await Comments.create(newComment);
		return comment;
	}
	/**
	 * 조회
	 */
	async getComment(postId) {
		const getComment = {
			postId: postId,
			deletedAt: { $exists: false },
		};

		return await Comments.find(getComment);
		// return await Posts.find({ deletedAt: { $exists: false } });
		// const comment = await Comments.find(getComment);
		// return comment;
	}

	/**
	 * 커뮤니티 게시글 수정 service
	 * 작성자 : 유경아
	 * 작성 시작일 : 2024-04-07
	 * 커뮤니티 글 수정에 동작되는 DB작업을 모아놓은 service입니다.
	 */
	async updateComment(commentId, content) {
		const updateComment = await Comments.findByIdAndUpdate(
			commentId,
			{
				content,
				updatedAt: Date.now() + 9 * 60 * 60 * 1000,
			},
			{ new: true },
		);
		return updateComment;
	}

	/**
	 * 커뮤니티 댓글 삭제 service
	 * 작성자 : 유경아
	 * 작성 시작일 : 2024-04-07
	 * 커뮤니티 댓글 삭제에 동작되는 DB작업을 모아놓은 service입니다.
	 */
	async deleteComment(commentId) {
		const deleteComment = await Comments.findByIdAndUpdate(
			commentId,
			{ deletedAt: Date.now() + 9 * 60 * 60 * 1000 },
			{ new: true },
		);
		if (!deleteComment) {
			return null;
		}
		return deleteComment;
	}
}

module.exports = CommentService;
