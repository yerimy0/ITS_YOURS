const { Qna, Members } = require('../models/index');
const { sendQnAReplyEmail, sendCustomEmail } = require('../utils/Mailer');

async function getNickName(id) {
	let nickname;
	const memberInfo = await Members.findOne({ id: id });
	nickname = memberInfo.nickName;

	return nickname;
}

// 사용자의 이메일을 가져오는 메소드
async function getEmail(id) {
	// userId를 사용하여 데이터베이스에서 사용자 정보를 조회
	const user = await Members.findOne({ id: id }); // User 모델을 사용한다고 가정
	email = user.email;
	if (!user) {
		throw new NotFoundError('사용자를 찾을 수 없습니다.');
	}
	return email; // 사용자의 이메일 반환
}

// Q&A 작성
async function createQna(title, content, nickname, email) {
	const newQnaData = {
		title: title,
		content: content,
		nickname: nickname,
		email: email,
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

// QnA 답변 저장 및 이메일 전송
async function answerQna(qnaId, answer) {
	const qna = await Qna.findOne({ _id: qnaId });

	if (!qna) {
		throw new Error('QnA를 찾을 수 없습니다.');
	}

	// 답변을 QnA 문서에 저장
	const updatedQna = await Qna.updateOne(
		{ _id: qna._id },
		{ $set: { answer: answer, isCompleted: true } },
	);
	if (!updatedQna) {
		throw new Error('답변 저장 중 오류가 발생했습니다.');
	}

	// 답변 이메일 전송
	const emailResult = await sendQnAReplyEmail(qna.email, answer);
	const html = 'QnaAnswerForm';
	await sendCustomEmail({
		to: qna.email,
		subject: '[이제너해] QnA 답변입니다.',
		templateName: html,
		replacements: answer,
	});

	return { updatedQna, emailResult };
}

module.exports = {
	getNickName,
	createQna,
	updateQna,
	getAllQna,
	deleteQna,
	getMyQna,
	getOneQna,
	answerQna,
	getEmail,
};
