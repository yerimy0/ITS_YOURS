const { Schema } = require('mongoose');

/**
 * 회원 Schema
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-04
 */
const MembersSchema = new Schema({
	//  회원 아이디
	id: {
		type: String,
		required: true,
	},
	// 회원 비밀번호
	password: {
		type: String,
		required: true,
	},
	// 회원 이름
	realName: {
		type: String,
		required: true,
	},
	// 회원 이메일
	email: {
		type: String,
		required: true,
	},
	region: {
		type: String,
		require: true,
	},
	// 회원 대학명
	schoolName: {
		type: String,
		required: true,
	},
	// 회원 전화번호
	phoneNum: {
		type: String,
		required: true,
	},
	// 좋아요갯수
	likeCount: {
		type: Number,
	},
	// 나빠요 갯수
	dislikeCount: {
		type: Number,
	},
	// 회원 가입일
	createdAt: {
		type: Date,
		default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
	// 회원정보 수정일
	updatedAt: {
		type: Date,
		//default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
	// 회원 탈퇴일
	deletedAt: {
		type: Date,
		//default: null,
	},
	// 관리자 회원 여부
	isAdmin: {
		type: Boolean,
		required: true,
		default: false,
	},
	// 회원 닉네임
	nickName: {
		type: String,
		required: true,
	},
	// 회원 프로필 사진
	profilePic: {
		type: String,
		default:
			'https://flexible.img.hani.co.kr/flexible/normal/900/902/imgdb/original/2023/0824/20230824504197.jpg',
	},
	// 신고회원여부
	isBanned: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = MembersSchema;
