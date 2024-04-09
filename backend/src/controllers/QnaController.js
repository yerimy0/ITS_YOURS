const qnaService = require('../services/QnaService');
const ObjectId = require('mongodb').ObjectId;

const createQna = async (req, res, next) => {
	try {
		const { title, content } = req.body;
		const result = await qnaService.createQna({ title, content });

		if (!result) {
			throw new Error('Q&A를 쓸 권한이 없습니다.');
		}
		console.log(newQna);
		return res.status(200).json(newQna);
	} catch (err) {
		next(err);
	}
};

const updateQna = async (req, res, next) => {
	const newQna = req.body.formData;
	const { title, content } = req.body;
	const id = req.query;

	try {
		const qnaService = new QnaService();
		const updatedQna = await qnaService.updateQna(title, content, newQna);
		if (!updatedQna) {
			return res.status(400).json({ message: 'Qna not found' });
		}
		res.status(200).json(updatedQna);
	} catch (err) {
		next(err);
	}
};

module.exports = { createQna, updateQna };
