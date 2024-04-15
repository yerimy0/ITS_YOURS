const memberService = require('../services/MemberService');

/**
 * 회원가입 controller
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-04
 * 기능 : 회원 가입시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const signUp = async (req, res, next) => {
	try {
		const { id, password, realName, email, region, schoolName, nickName, profilePic } = req.body;
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
			throw new Error('서버 오류 입니다.');
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
		const loginResult = await memberService.login(id, password);
		if (!loginResult) {
			res.status(404).json({
				message: '없는 유저입니다',
			});
		} else if (loginResult === false) {
			// 로그인 실패 시 처리
			res.status(401).json({
				message: '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.',
			});
		} else {
			// 로그인 성공 시 처리
			const { accessToken, isAdmin } = loginResult;

			res.status(200).json({
				isAdmin: isAdmin, // 관리자 여부
				message: '로그인에 성공했습니다!',
				accessToken: accessToken,
			});
		}
	} catch (error) {
		next(error);
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
		const memberInfo = await memberService.getMember(userId);

		if (!memberInfo) {
			return res.status(404).json({ data: null, message: '사용자 정보를 찾을 수 없습니다.' });
		}
		// 사용자 정보 조회 성공 응답
		res.status(200).json(memberInfo);
	} catch (err) {
		next(err);
	}
};

const getSellerInfo = async (req, res, next) => {
	try {
		const { sellerId } = req.params;
		const sellerInfo = await memberService.getSellerInfo(sellerId);

		if (!sellerInfo) {
			return res.status(400).json({ data: null, message: '사용자 정보를 찾을 수 없습니다.' });
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
const updateMember = async (req, res) => {
	try {
		// 현재 로그인한 사용자의 ID를 인증 시스템에서 가져옵니다.
		// 예시에서는 req.user.id를 사용한다고 가정합니다.
		const userId = req.user.id;
		const updatedMember = await memberService.updateMember(userId, req.body);

		res.json(updatedMember);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

/**
 * 회원 정보 삭제 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-08
 * 회원 정보 삭제에 필요한 동작들을 모아놓은 controller입니다.
 */
const deleteMember = async (req, res) => {
	try {
		const userId = req.user.id;
		const deleteMember = await memberService.deleteMember(userId);

		if (!deleteMember) {
			return res.status(400).json({ message: '회원 정보를 찾을 수 없습니다.', deleteMember });
		}

		return res.status(200).json(deleteMember);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: '회원 정보 삭제 중 오류가 발생했습니다' });
	}
};

// 아이디 찾기
async function findId(req, res) {
	try {
		const { realName, email } = req.body;
		const userId = await memberService.findIdByNameAndEmail(realName, email);
		res.json({ message: '사용자의 아이디를 찾았습니다.', userId });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
}

async function resetPassword(req, res) {
	try {
		const { id, email } = req.body;
		await memberService.resetPasswordAndSendEmail(id, email);
		res.json({ message: '임시 비밀번호가 이메일로 전송되었습니다.' });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
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
};
