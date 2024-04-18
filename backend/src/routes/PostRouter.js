const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const {
	createPost,
	getAllPosts,
	getPostDetails,
	updatePost,
	deletePost,
} = require('../controllers/PostController');

const router = Router();

// 커뮤니티 - 게시글 글 작성
router.post('/posts', upload.single('img1'), validateToken, createPost);
// 커뮤니티 - 게시글 글 목록 조회
router.get('/posts', getAllPosts);
// 커뮤니티 - 게시글 상세 글 조회
router.get('/posts/:postId', getPostDetails);
// 커뮤니티 - 게시글 수정
router.put('/posts/:postId/', upload.single('img1'), validateToken, updatePost);
// 커뮤니티 - 게시글 삭제
router.delete('/posts/:postId', validateToken, deletePost);

module.exports = router;
