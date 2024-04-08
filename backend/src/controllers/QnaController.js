const qnaService = require("../services/QnaService");

const createQna = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await qnaService.createQna(title, content);

    if (!result) {
      throw new Error("Q&A를 쓸 권한이 없습니다.");
    }

    const newQna = await qnaService.createQna({
      title,
      content,
    });
    console.log(newQna);
    return res.status(200).json(newQna);
  } catch (err) {
    next(err);
  }
};

module.exports = { createQna };
