const { Wisher } = require('../models');

async function createComment(postId, content, nickName, profilePic) {
	const newComment = {
		postId: postId,
		content: content,
		nickName: nickName,
		profilePic: profilePic,
		createdAt: new Date(),
	};
	const comment = await Comments.create(newComment);
	return comment;
}

module.exports = {};
