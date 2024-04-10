const { Qna } = require('../models/index');
const { User } = require('../models/index');

// Q&A 작성
async function createQna(title, content, nickname) {
	const newQnaData = {
		title: title,
		content: content,
		nickname: nickname,
	};
	console.log(newQnaData);
	const createQna = await Qna.create(newQnaData);
	return createQna;
}

// 모든 Q&A 조회
async function getAllQna() {
	return await Qna.find().populate('nickname').populate('title').populate('content');
}

// Q&A 수정
async function updateQna(qnaId, { content, title }) {
	try {
		const qna = await Qna.findOne({ _id: qnaId });

		if (qna.deletedAt) {
			throw new Error('이미 삭제된 Q&A입니다.');
		}
		await Qna.findOneAndUpdate(
			{ _id: qnaId },
			{
				title: title,
				content: content,
				updatedAt: Date.now() + 9 * 60 * 60 * 1000,
			},
		);
		const result = await Qna.findOne({ _id: qnaId });
		return result;
	} catch (error) {
		throw new Error('Q&A 업데이트 중 오류가 발생했습니다.');
	}
}

// Q&A 삭제
async function deleteQna(email, qnaID) {
	const user = await User.findOne({ email }).select('_id');
	const qna = await Qna.findById(qnaID);
	if (!qna) return 'notFound';

	if (qna.user.toString() === user._id.toString()) {
		return await Qna.findByIdAndDelete(qnaID);
	} else {
		return 'notMyQna';
	}
}

// 내 Q&A 조회
async function getMyQna(nickname) {
	const user = await User.findOne({ nickName: nickname });
	console.log(user);
	const myQna = await Qna.find({ nickname: user });
	return myQna;
}

module.exports = { createQna, updateQna, getAllQna, deleteQna, getMyQna };
