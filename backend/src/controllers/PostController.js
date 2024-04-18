const PostService = require('../services/PostService');
const { NotFoundError, BadRequestError, InternalServerError } = require('../config/CustomError');

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
		const schoolName = req.user.schoolName;
		let photos = req.file ? req.file.location : '';

		const { title, content } = req.body;

		if (!nickName) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		if (!title || !content) {
			throw new BadRequestError('필수 내용을 모두 입력해주세요.');
		}
		const post = await PostService.createPost(
			title,
			content,
			nickName,
			profilePic,
			schoolName,
			photos,
		);

		if (!post) {
			throw new InternalServerError('서버 오류 입니다.');
		}
		return res.status(200).json(post);
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
		res.status(200).json(posts);
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
			throw new NotFoundError('게시글이 없습니다.');
		}

		res.status(200).json(post);
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
	const userNickname = req.user.nickName;
	let photos = req.file ? req.file.location : '';
	const { title, content } = req.body;

	try {
		const { postId } = req.params;
		const postInfo = await PostService.getPostDetails(postId);

		if (postInfo.nickName !== userNickname) {
			throw new BadRequestError('게시글 작성자만 수정할 수 있습니다');
		}
		const updatedPost = await PostService.updatePost(postId, {
			title,
			content,
			photos,
		});
		if (!updatedPost) {
			throw new NotFoundError('게시글이 없습니다.');
		}
		res.status(200).json(updatedPost);
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
		const userNickname = req.user.nickName;
		const isAdmin = req.user.isAdmin;
		const { postId } = req.params;
		const postInfo = await PostService.getPostDetails(postId);

		if (!isAdmin) {
			if (postInfo.nickName !== userNickname) {
				throw new BadRequestError('게시글 작성자만 삭제할 수 있습니다');
			}
		}

		const deletedPost = await PostService.deletePost(postId);

		if (!deletedPost) {
			throw new NotFoundError('게시글이 없습니다.');
		}
		// 삭제 성공 응답
		res.status(200).json({
			message: deletedPost.message, // 성공 메시지를 서비스로부터 받아온 메시지로 설정
			data: deletedPost.deletedPost, // deletedPost 객체를 data 속성에 할당
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	createPost,
	getAllPosts,
	getPostDetails,
	updatePost,
	deletePost,
};
