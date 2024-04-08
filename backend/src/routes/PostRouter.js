const { Router } = require("express");
const {
  createPost,
  getAllPosts,
  getPostDetails,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

const router = Router();
// 커뮤니티 - 게시글 글 작성
router.post("/posts", createPost);
// 커뮤니티 - 게시글 글 목록 조회
router.get("/posts", getAllPosts);
// 커뮤니티 - 게시글 상세 글 조회
router.get("/posts/:id", getPostDetails);
// 커뮤니티 - 게시글 수정
router.put("/posts/:id", updatePost);
// 커뮤니티 - 게시글 삭제
router.delete("/posts/:id", deletePost);

module.exports = router;
