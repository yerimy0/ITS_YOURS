const qnaService = require('../services/QnaService');
const ObjectId = require('mongodb').ObjectId;

// Q&A 작성
const createQna = async (req, res, next) => {
	try {
		const nickname = req.user.nickName;
		const { title, content } = req.body;
		const result = await qnaService.createQna(title, content, nickname);

		if (!result) {
			throw new Error('Q&A를 쓸 권한이 없습니다.');
		}
		console.log(result);
		return res.status(200).json(result);
	} catch (err) {
		next(err);
	}
};

//모든 Q&A 조회
const getAllQna = async (req, res, next) => {
	try {
		const qnaService = new QnaService();
		const qna = await qnaService.getAllQna();
		res.json(qna);
	} catch (err) {
		next(err);
	}
};

// Q&A 수정
const updateQna = async (req, res, next) => {
	try {
		const { qnaId } = req.query;
		const qnaObjectId = new ObjectId(qnaId);
		const { title, content } = req.body;
		const updatedQna = await qnaService.updateQna(qnaObjectId, { title, content });
		if (!updatedQna) {
			return res.status(400).json({ message: 'Qna not found' });
		}
		res.status(200).json(updatedQna);
	} catch (err) {
		next(err);
	}
};

// Q&A 삭제
const deleteQna = async (req, res, next) => {
	const id = req.decoded.user.id;
	const title = req.params.title;
	const content = req.params.content;

	try {
		const qnaService = new QnaService();
		const deletedQna = await qnaService.deleteQna(id, title, content);
		if (deletedQna === 'notFound') {
			throw new NotFoundError('조회되는 Q&A가 없습니다.');
		}
		if (deletedQna === 'notMyQna') {
			throw new NotFoundError('작성자가 다릅니다.');
		}

		res.status(200).json({ message: 'Q&A deleted' });
	} catch (err) {
		next(err);
	}
};

// 내 Q&A 조회
const getMyQna = async (req, res, next) => {
	try {
		const nickname = req.user.nickName;
		const qna = await qnaService.getMyQna(nickname);
		if (!qna) {
			throw new NotFoundError('조회되는 Q&A가 없습니다!');
		}
		res.status(200).json({ data: qna, message: 'Q&A조회 성공' });
	} catch (err) {
		next(err);
	}
};

module.exports = { createQna, updateQna, getAllQna, deleteQna, getMyQna };
