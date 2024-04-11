const { Comments, Posts } = require('../models');

/**
 * 커뮤니티 댓글 작성 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 커뮤니티 댓글 조회에 동작되는 DB작업을 모아놓은 service입니다.
 */
async function createComment(postId, content, nickName, profilePic) {
	const newComment = {
		postId: postId,
		content: content,
		nickName: nickName,
		profilePic: profilePic,
		createdAt: new Date(),
	};
	const comment = await Comments.create(newComment);
	await Posts.findByIdAndUpdate(postId, { $inc: { commentCounts: 1 } });

	return comment;
}

/**
 * 커뮤니티 댓글 조회 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 커뮤니티 댓글 조회에 동작되는 DB작업을 모아놓은 service입니다.
 */
async function getComment(postId) {
	try {
		const comments = await Comments.find({ postId: postId, deletedAt: { $exists: false } });

		return comments;
	} catch (error) {
		console.error('Error fetching comments with member info:', error);
		throw error;
	}
}

/**
 * 커뮤니티 댓글 수정 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 커뮤니티 댓글 수정에 동작되는 DB작업을 모아놓은 service입니다.
 */
async function updateComment(commentId, content) {
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
async function deleteComment(commentId) {
	const deleteComment = await Comments.findByIdAndUpdate(
		commentId,
		{ deletedAt: Date.now() + 9 * 60 * 60 * 1000 },
		{ new: true },
	);
	if (!deleteComment) {
		return null;
	}

	await Posts.findByIdAndUpdate(deleteComment.postId, { $inc: { commentCounts: -1 } });

	return deleteComment;
}

module.exports = {
	createComment,
	getComment,
	updateComment,
	deleteComment,
};
