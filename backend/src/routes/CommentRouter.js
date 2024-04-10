const { Router } = require('express');
const validateToken = require('../middlewares/ValidateToken');
const {
	updateComment,
	deleteComment,
	createComment,
	getComment,
} = require('../controllers/CommentController');

const router = Router();
// 커뮤니티 - 댓글 조회
router.get('/posts/:postId/comment', getComment);
// 커뮤니티 - 댓글 작성
router.post('/posts/:postId/comment', validateToken, createComment);
// 커뮤니티 - 댓글 수정
router.put('/posts/:postId/comment/:commentId', validateToken, updateComment);
// 커뮤니티 - 댓글 삭제
router.delete('/posts/:postId/comment/:commentId', validateToken, deleteComment);

module.exports = router;
