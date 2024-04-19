const qnaService = require('../services/QnaService');
const ObjectId = require('mongodb').ObjectId;
const {
	NotFoundError,
	BadRequestError,
	InternalServerError,
	UnauthorizedError,
} = require('../config/CustomError');

// Q&A 작성
const createQna = async (req, res, next) => {
	try {
		const id = req.user.id;
		const nickname = await qnaService.getNickName(id);
		const email = await qnaService.getEmail(id); // 이메일 정보 가져오기

		const { title, content } = req.body;
		const result = await qnaService.createQna(title, content, nickname, email);

		if (!id) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		return res.status(200).json(result);
	} catch (err) {
		next(err);
	}
};

//모든 Q&A 조회
const getAllQna = async (req, res, next) => {
	try {
		const isAdmin = req.user.isAdmin;

		if (!isAdmin) {
			throw new UnauthorizedError('권한이 없습니다.');
		}
		const qna = await qnaService.getAllQna();
		res.status(200).json(qna);
	} catch (err) {
		next(err);
	}
};

// Q&A 수정
const updateQna = async (req, res, next) => {
	try {
		const id = req.user.id;
		const isAdmin = req.user.isAdmin;
		const nickname = await qnaService.getNickName(id);

		const { qnaId } = req.query;
		const qnaObjectId = new ObjectId(qnaId);
		const { title, content } = req.body;

		const chkDeleted = await qnaService.getOneQna(qnaId);

		if (!id) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		if (nickname !== chkDeleted.nickname || !isAdmin) {
			throw new UnauthorizedError('권한이 없습니다.');
		}
		if (chkDeleted.deletedAt) {
			throw new BadRequestError('이미 삭제된 QnA는 수정할 수 없습니다.');
		}
		if (!title || !content) {
			throw new BadRequestError('필수 정보를 모두 입력해주세요.');
		}

		const updatedQna = await qnaService.updateQna(qnaObjectId, { title, content });

		if (!updatedQna) {
			throw new InternalServerError('업데이트 중 오류가 발생했습니다.');
		}
		res.status(200).json(updatedQna);
	} catch (err) {
		next(err);
	}
};

// Q&A 삭제
const deleteQna = async (req, res, next) => {
	try {
		const id = req.user.id;
		const isAdmin = req.user.isAdmin;
		const nickname = await qnaService.getNickName(id);

		const { qnaId } = req.query;
		const qnaObjectId = new ObjectId(qnaId);

		const chkDeleted = await qnaService.getOneQna(qnaId);

		if (!id) {
			throw new BadRequestError('로그인 후 이용해주세요.');
		}
		if(!isAdmin) {
			if (nickname !== chkDeleted.nickname) {
				throw new UnauthorizedError('권한이 없습니다.');
			}
		}
		if (chkDeleted.deletedAt) {
			throw new BadRequestError('이미 삭제된 QnA입니다.');
		}
		const deleteQna = await qnaService.deleteQna(qnaObjectId);

		if (!deleteQna) {
			throw new NotFoundError('QnA를 찾을 수 없습니다.');
		}

		res.status(200).send({ message: '문의글이 삭제되었습니다.', deleteQna });
	} catch (err) {
		next(err);
	}
};

// 내 Q&A 조회
const getMyQna = async (req, res, next) => {
	try {
		const id = req.user.id;
		const nickname = await qnaService.getNickName(id);

		const qna = await qnaService.getMyQna(nickname);
		if (!qna) {
			throw new NotFoundError('조회되는 Q&A가 없습니다!');
		}
		res.status(200).json({ data: qna, message: 'Q&A조회 성공' });
	} catch (err) {
		next(err);
	}
};

// Q&A 답변 처리 + 이메일 전송
const answerQna = async (req, res, next) => {
	const { qnaId } = req.params; // URL에서 qnaId 추출
	const { answer } = req.body; // 요청 본문에서 답변 내용 추출

	try {
		const isAdmin = req.user.isAdmin;

		if (!isAdmin) {
			throw new UnauthorizedError('권한이 없습니다.');
		}
		// 답변 저장 및 이메일 전송
		const result = await qnaService.answerQna(qnaId, answer);
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
};

module.exports = { createQna, updateQna, getAllQna, deleteQna, getMyQna, answerQna };
