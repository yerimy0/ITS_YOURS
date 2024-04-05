const { Schema } = require("mongoose");

const MembersSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  realName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  univName: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
  },
  dislikeCount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
    default: null, // 탈퇴하지 않은 회원은 null
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  nickName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "", // 프로필 사진이 없는 경우 빈 문자열..?
  },
  isBanned: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = { MembersSchema };
