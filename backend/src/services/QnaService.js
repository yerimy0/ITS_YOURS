const { Qna } = require('../models/index');
const { User } = require('../models/index');

// Q&A 작성
async function createQna(title, content) {
	const newQnaData = {
		title: title,
		content: content,
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
async function updateQna(content, title, newQna, Id) {
	const user = await User.findOne({ email }).select('_id');

	const qna = await Qna.findById(qnaID);

	if (qna.user.toString() === user._id.toString()) {
		const updateQna = await Qna.update(Id, {
			title: title,
			content: content,
		});
		return updateQna;
	} else {
		console.log('not match');
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
async function getMyQna(id) {
	const user = await User.findOne({ id }).select('_id');
	const myQna = await Qna.find({ user }).populate('title', 'content');
	return myQna;
}

module.exports = { createQna, updateQna, getAllQna, deleteQna, getMyQna };
