const { Qna } = require('../models/index');

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
	return await Qna.find();
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
async function deleteQna(qnaId) {
	try {
		const qna = await Qna.findOne({ _id: qnaId });
		if (qna.deletedAt) {
			throw new Error('이미 삭제된 문의글입니다');
		}
		await Qna.findOneAndUpdate({ _id: qnaId }, { deletedAt: Date.now() + 9 * 60 * 60 * 1000 });
		if (!deleteQna) {
			throw new Error('문의글을 찾을 수 없습니다.');
		}
		return { message: '문의글이 삭제되었습니다.', deleteQna };
	} catch (error) {
		throw error;
	}
}

// 내 Q&A 조회
async function getMyQna(nickname) {
	const myQna = await Qna.find({ nickname: nickname });

	return myQna;
}

module.exports = { createQna, updateQna, getAllQna, deleteQna, getMyQna };
