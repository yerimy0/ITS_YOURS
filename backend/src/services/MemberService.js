const { Members } = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * 회원가입 service
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-03
 * 회원가입시 동작되는 DB작업을 모아놓은 service입니다.
 */
async function signUp(id, password, realName, email, univName, phoneNum, nickName) {
	// const isRegedId = await Members.find({ id });
	// const isRegedEmail = await Members.find({ email });
	// const isRededPhone = await Members.find({ phoneNum });

	// if (isRegedId) {
	// 	throw new Error('이미 사용중인 아이디입니다.');
	// } else if (isRegedEmail) {
	// 	throw new Error('이미 사용중인 이메일입니다.');
	// } else if (isRededPhone) {
	// 	throw new Error('이미 사용중인 핸드폰번호 입니다.');
	// }

	//사용자 입력 비밀번호 해시화
	const hashedPassword = await bcrypt.hash(password, 8);
	const newMember = {
		id: id,
		password: hashedPassword,
		realName: realName,
		email: email,
		univName: univName,
		phoneNum: phoneNum,
		nickName: nickName,
	};
	//회원 정보 create
	const member = await Members.create(newMember);
	return member;
}

/**
 * 로그인 service
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-04
 * 로그인 기능 관련 DB작업이 모여있는 service입니다.
 */
async function login(id, password) {
	let isAdmin; // 관리자 회원여부
	// 회원정보
	const member = await Members.findOne({ id });
	// 사용자 입력 비밀번호 vs 해시화된 비밀번호 교차비교
	const isPass = await bcrypt.compare(password, member.password);
	// 회원정보 존재, 로그인 성공
	if (member && isPass) {
		// access 토큰
		const accessToken = jwt.sign(
			{
				user: {
					username: member.realName,
					id: member.id,
					nickName: member.nickName,
					isAdmin: member.isAdmin,
					profilePic: member.profilePic,
					univName: member.univName,
				},
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '14d' }, // 토큰 유효기간
		);

		isAdmin = member.isAdmin; // 관리자 회원여부

		// 액세스 토큰 & 관리자 회원여부 반환
		return { accessToken, isAdmin }; // 객체로 반환
	}
	// 로그인 실패
	else {
		return false;
	}
}

/**
 * 회원 정보 조회 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 회원정보조회 기능 관련 DB작업이 모여있는 service입니다.
 */
async function getMember(userId) {
	const memberInfo = await Members.findOne({ userId });
	return memberInfo;
}

/**
 * 회원 정보 수정 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 회원정보수정 기능 관련 DB작업이 모여있는 service입니다.
 */
async function updateMember(userId, updateData) {
	try {
		// MongoDB의 findByIdAndUpdate 메서드를 사용하여 회원 정보 업데이트
		// { new: true } 옵션을 사용하여 업데이트된 문서 반환
		const updatedMember = await Member.findByIdAndUpdate(userId, updateData, {
			new: true,
		});

		if (!updatedMember) {
			// 업데이트할 회원을 찾을 수 없는 경우, 에러 발생
			throw new Error('회원을 찾을 수 없습니다.');
		}

		return updatedMember; // 업데이트된 회원 정보 반환
	} catch (error) {
		throw error; // 에러는 컨트롤러에서 핸들링
	}
}

module.exports = { signUp, login, getMember, updateMember };
