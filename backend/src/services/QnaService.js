const { Qna } = require("../models/index");

async function createQna(title, content) {
  const newQnaData = {
    title: title,
    content: content,
  };
  console.log(newQnaData);
  const createQna = await Qna.create(newQnaData);
  return createQna;
}

module.exports = { createQna };
