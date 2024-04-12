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
	try {
		const { qnaId } = req.params;
		const qnaObjectId = new ObjectId(qnaId);
		const deleteQna = await qnaService.deleteQna(qnaObjectId);

		if (!deleteQna) {
			return res.status(404).send({ message: '문의글을 찾을 수 없습니다.' });
		}

		res.status(200).send({ message: '문의글이 삭제되었습니다.', deletedPost });
	} catch (error) {
		res.status(500).send({
			message: '문의글 삭제 중 오류가 발생했습니다.',
			error: error.message,
		});
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
