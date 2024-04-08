const { Schema } = require("mongoose");

/**
 * 커뮤니티 Schema
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 */
const PostsSchema = new Schema({
  // 게시글 제목
  title: {
    type: String,
    required: true,
  },
  //   게시글 본문
  content: {
    type: String,
    required: true,
  },
  // 게시글 작성자 닉네임
  nickName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  // 게시글 등록일
  createdAt: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
  // 게시글 수정일
  updatedAt: {
    type: Date,
  },
  // 게시글 삭제일
  deletedAt: {
    type: Date,
  },
  photos: {
    type: Array,
  },
});

module.exports = PostsSchema;
