const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
	try {
		const { authorization } = req.headers;

		if (!authorization) {
			throw new Error('엑세스 토큰이 없습니다.');
		}
		const token = authorization.replace('Bearer ', '');

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) {
				throw new Error('엑세스 토큰이 유효하지 않습니다.');
			} else {
				req.user = decoded.user;
				next();
			}
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = validateToken;
