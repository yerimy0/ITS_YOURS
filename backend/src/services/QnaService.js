const { Qna, Members } = require('../models/index');

async function getNickName(id) {
	let nickname;
	const memberInfo = await Members.findOne({ id: id });
	nickname = memberInfo.nickName;

	return nickname;
}
// Q&A 작성
async function createQna(title, content, nickname) {
	const newQnaData = {
		title: title,
		content: content,
		nickname: nickname,
	};
	const createQna = await Qna.create(newQnaData);
	return createQna;
}

// 모든 Q&A 조회
async function getAllQna() {
	return await Qna.find({ deletedAt: { $exists: false } });
}

// Q&A 수정
async function updateQna(qnaId, { content, title }) {
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
}

// Q&A 삭제
async function deleteQna(qnaId) {
	await Qna.findOneAndUpdate({ _id: qnaId }, { deletedAt: Date.now() + 9 * 60 * 60 * 1000 });
	const result = await Qna.findOne({ _id: qnaId });
	return result;
}

// 내 Q&A 조회
async function getMyQna(nickname) {
	const myQna = await Qna.find({ nickname: nickname, deletedAt: { $exists: false } });

	return myQna;
}

//특정 Q&A 조회
async function getOneQna(qnaId) {
	const result = await Qna.findOne({ _id: qnaId });
	return result;
}

module.exports = { getNickName, createQna, updateQna, getAllQna, deleteQna, getMyQna, getOneQna };
