const PostService = require('../services/PostService');

/**
 * 커뮤니티 게시글 작성 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 기능 : 게시글 작성 시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const createPost = async (req, res, next) => {
	try {
		const nickName = req.user.nickName;
		const profilePic = req.user.profilePic;
		const univName = req.user.univName;

		const { title, content, photos } = req.body;
		const post = await PostService.createPost(
			title,
			content,
			nickName,
			profilePic,
			univName,
			photos,
		);

		if (!post) {
			throw new Error('서버 오류 입니다.');
		}
		return res.status(200).json({ data: post, message: '글 작성 성공!!!' });
	} catch (err) {
		next(err);
	}
};

/**
 * 커뮤니티 모든 게시글 조회 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 기능 : 게시글 리스트 조회시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const getAllPosts = async (req, res, next) => {
	try {
		const posts = await PostService.getAllPosts();
		res.status(200).json({ data: posts });
	} catch (err) {
		next(err);
	}
};

/**
 * 커뮤니티 게시글 상세 조회 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 기능 : 게시글 상세 조회시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const getPostDetails = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const post = await PostService.getPostDetails(postId);

		if (!post) {
			return res.status(404).json({ message: 'Post not found' });
		}

		res.status(200).json({ data: post });
	} catch (error) {
		next(error);
	}
};

/**
 * 커뮤니티 게시글 수정 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 기능 : 게시글 수정에 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const updatePost = async (req, res, next) => {
	const { title, content, photos } = req.body;

	try {
		const { postId } = req.params;
		// const postService = new PostService();
		const updatedPost = await PostService.updatePost(postId, {
			title,
			content,
			photos,
		});
		if (!updatedPost) {
			return res.status(404).json({ message: 'post not found' });
		}
		res.status(200).json({ data: updatedPost });
	} catch (err) {
		next(err);
	}
};

/**
 * 커뮤니티 게시글 삭제 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-07
 * 기능 : 게시글 삭제에 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const deletePost = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const deletedPost = await PostService.deletePost(postId);

		if (!deletedPost) {
			return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
		}

		// 삭제 성공 응답
		res.status(200).json({
			message: deletedPost.message, // 성공 메시지를 서비스로부터 받아온 메시지로 설정
			data: deletedPost.deletedPost, // deletedPost 객체를 data 속성에 할당
		});
	} catch (error) {
		res.status(500).json({
			message: '게시글 삭제 중 오류가 발생했습니다.',
			error: error.message,
		});
	}
};

module.exports = {
	createPost,
	getAllPosts,
	getPostDetails,
	updatePost,
	deletePost,
};
