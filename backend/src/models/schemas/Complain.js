const { Schema } = require('mongoose');

/**
 * 신고 Schema
 * 작성자 : 류효종
 * 작성 시작일 : 2024-04-08
 */
<<<<<<< Updated upstream
const ComplainSchema = new Schema({
	// 신고자 Id
	reporterId: {
		type: String,
		required: true,
	},
	// 신고된 Id
	bannedId: {
		type: String,
		required: true,
	},
	// 신고내용
	bannedContent: {
		type: String,
		required: true,
	},
	// 신고 처리여부
	isCompleted: {
		type: Boolean,
	},
	// 신고일자
	regDate: {
		type: Date,
		default: () => Date.now() + 9 * 60 * 60 * 1000,
	},
});

module.exports = ComplainSchema;
=======
const CommentsSchema = new Schema({
  // 신고자 ID
  reporterId: {
    type: String,
    required: true,
  },
  // 신고된 ID
  bannedId: {
    type: String,
    required: true,
  },
  // 신고내용
  bannedContent: {
    type: String,
    required: true,
  },
  // 신고 처리여부
  isCompleted: {
    type: Boolean,
  },
  // 신고일자
  regDate: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
});

module.exports = CommentsSchema;
>>>>>>> Stashed changes
