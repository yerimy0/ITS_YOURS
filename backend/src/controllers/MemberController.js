const memberService = require('../services/MemberService');
const categoryService = require('../services/CategoryService');

const {
	NotFoundError,
	BadRequestError,
	InternalServerError,
	ConflictError,
	ForbiddenError,
	UnauthorizedError,
} = require('../config/CustomError');

/**
 * 회원가입 controller
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-04
 * 기능 : 회원 가입시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const signUp = async (req, res, next) => {
	try {
		const { id, password, realName, email, schoolName, nickName } = req.body;
		let profilePic = req.file ? req.file.location : ''; // 파일 경로 저장

		let region = await categoryService.getRegionBySchoolName(schoolName);

		const isRegisteredId = await memberService.getMember(id);
		const isRegisteredEmail = await memberService.getMemberByEmail(email);

		if (!id || !password || !realName || !email || !region || !schoolName || !nickName) {
			throw new BadRequestError('필수 정보를 모두 입력하세요.');
		}
		if (isRegisteredId) {
			throw new ConflictError('이미 사용중인 아이디입니다.');
		}
		if (isRegisteredEmail) {
			throw new BadRequestError('이미 사용중인 이메일입니다.');
		}
		//서비스 접근, signUp 메소드 실행
		const member = await memberService.signUp(
			id,
			password,
			realName,
			email,
			region,
			schoolName,
			nickName,
			profilePic,
		);
		//통신 실패
		if (!member) {
			throw new InternalServerError('서버 오류 입니다.');
		}
		//통신 성공
		res.status(200).json({ data: member, message: '회원 가입 성공' });
	} catch (err) {
		next(err);
	}
};

/**
 * 로그인 controller
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-05
 * 로그인 기능에 필요한 동작들을 모아놓은 controller입니다.
 */
const login = async (req, res, next) => {
	try {
		const { id, password } = req.body;
		if (!id || !password) {
			throw new BadRequestError('아이디와 패스워드가 모두 필요합니다.');
		}
		const isRegistered = await memberService.getMember(id);

		if (!isRegistered) {
			throw new NotFoundError('가입 정보가 없습니다.');
		}
		if (isRegistered.deletedAt) {
			throw new BadRequestError('이미 탈퇴한 회원입니다.');
		}

		const loginResult = await memberService.login(id, password);
		if (!loginResult) {
			throw new ForbiddenError('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
		}
		const { accessToken } = loginResult;
		res.status(200).json({
			accessToken: accessToken,
			message: '로그인에 성공했습니다!',
		});
	} catch (err) {
		next(err);
	}
};
/**
 * 회원정보 조회 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-04
 * 회원정보 기능에 필요한 동작들을 모아놓은 controller 입니다.
 */
const getMember = async (req, res, next) => {
	try {
		const userId = req.user.id;

		if (!userId) {
			throw new UnauthorizedError('로그인이 필요한 서비스입니다.');
		}

		const memberInfo = await memberService.getMember(userId);

		if (!memberInfo || memberInfo.deletedAt) {
			throw new NotFoundError('사용자 정보를 찾을 수 없습니다.');
		}
		// 사용자 정보 조회 성공 응답
		res.status(200).json(memberInfo);
	} catch (err) {
		next(err);
	}
};

/**
 * 상품글 > 판매자 정보 조회 API
 * 작성자: 이정은
 * 작성 시작일 : 2024-04-15
 * 상품글의 sellerId 로 판매자의 정보를 조회해오는 API입니다.
 */
const getSellerInfo = async (req, res, next) => {
	try {
		const { id } = req.query;
		const sellerInfo = await memberService.getSellerInfo(id);

		if (!sellerInfo) {
			throw new BadRequestError('사용자 정보를 찾을 수 없습니다.');
		}
		res.status(200).json(sellerInfo);
	} catch (err) {
		next(err);
	}
};

/**
 * 회원 정보수정 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-08
 * 회원 정보수정에 필요한 동작들을 모아놓은 controller입니다.
 */
const updateMember = async (req, res, next) => {
	try {
		const userId = req.user.id;
		let profilePic = req.file ? req.file.location : '';
		const { password, realName, email, schoolName, nickName } = req.body;

		let region = await categoryService.getRegionBySchoolName(schoolName);

		const chkDeleted = await memberService.getMember(userId);

		if (!userId) {
			throw new BadRequestError('로그인이 필요한 서비스입니다.');
		}

		if (!password || !realName || !email || !region || !schoolName || !nickName) {
			throw new BadRequestError('필수 정보를 모두 입력하세요.');
		}

		if (chkDeleted.deletedAt) {
			throw new BadRequestError('이미 탈퇴한 회원의 정보는 수정할 수 없습니다.');
		}

		const memberInfo = await memberService.updateMember(
			userId,
			password,
			realName,
			email,
			region,
			schoolName,
			nickName,
			profilePic,
		);

		res.status(200).json({
			message: '회원정보수정 성공',
			data: memberInfo,
		});
	} catch (err) {
		next(err);
	}
};

/**
 * 회원 정보 삭제 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-08
 * 회원 정보 삭제에 필요한 동작들을 모아놓은 controller입니다.
 */
const deleteMember = async (req, res, next) => {
	try {
		const userId = req.user.id;

		if (!userId) {
			throw new UnauthorizedError('로그인이 필요한 서비스입니다.');
		}

		const memberInfo = await memberService.getMember(userId);
		if (memberInfo.deletedAt) {
			throw new BadRequestError('이미 탈퇴한 회원입니다.');
		}

		const deleteMember = await memberService.deleteMember(userId);
		return res.status(200).json(deleteMember);
	} catch (err) {
		next(err);
	}
};

// 아이디 찾기
async function findId(req, res) {
	try {
		const { realName, email } = req.body;
		const userId = await memberService.findIdByNameAndEmail(realName, email);
		res.status(200).json({ message: '사용자의 아이디를 찾았습니다.', userId });
	} catch (error) {
		throw new BadRequestError(error.message);
	}
}

async function resetPassword(req, res) {
	try {
		const { id, email } = req.body;
		const reset = await memberService.resetPassword(id, email);
		res.status(200).json({ message: '임시 비밀번호가 이메일로 전송되었습니다.', reset });
	} catch (error) {
		throw new BadRequestError(error.message);
	}
}

// 이메일 인증코드 전송
async function sendVerifyEmail(req, res, next) {
	try {
		const { email, code } = req.body;
		if (!email) {
			throw new BadRequestError('이메일을 입력해주세요');
		}
		await memberService.sendEmailVerification(email);
		res.status(200).json({ message: '인증코드가 이메일로 전송되었습니다.' });
	} catch (err) {
		next(err);
	}
}

// 인증코드 검증
async function verifyCode(req, res, next) {
	try {
		const { email, code } = req.body;
		if (!email || !code) {
			throw new BadRequestError('이메일과 인증코드를 모두 입력해주세요.');
		}
		const isVerified = await memberService.chkVerifyCode(email, code);
		if (isVerified) {
			res.status(200).json({ isVerified });
		} else {
			throw new BadRequestError('인증코드가 일치하지 않습니다.');
		}
	} catch (err) {
		next(err);
	}
}

module.exports = {
	signUp,
	login,
	getMember,
	getSellerInfo,
	updateMember,
	deleteMember,
	findId,
	resetPassword,
	sendVerifyEmail,
	verifyCode,
};
