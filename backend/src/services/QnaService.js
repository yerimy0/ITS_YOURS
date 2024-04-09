const { Qna } = require('../models/index');
const { User } = require('../models/index');

async function createQna(title, content) {
	const newQnaData = {
		title: title,
		content: content,
	};
	console.log(newQnaData);
	const createQna = await Qna.create(newQnaData);
	return createQna;
}

async function updateQna(content, title, newQna, Id) {
	const user = await User.findOne({ email }).select('_id');

	const qna = await Qna.findById(qnaID);

	if (qna.user.toString() === user._id.toString()) {
		const updateQna = await Qna.update(ID, {
			title: title,
			content: content,
		});
		return updateQna;
	} else {
		console.log('not match');
	}
}

module.exports = { createQna, updateQna };
