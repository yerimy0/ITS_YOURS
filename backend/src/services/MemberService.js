const { Members } = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * 회원가입 service
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-03
 * 회원가입시 동작되는 DB작업을 모아놓은 service입니다.
 */
async function signUp(id, password, realName, email, univName, phoneNum, nickName, profilePic) {
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
		profilePic: profilePic,
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
	const memberInfo = await Members.findOne({ id: userId });
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
		const dataWithTimestamp = {
			...updateData,
			updatedAt: new Date(Date.now() + 9 * 60 * 60 * 1000),
		};

		const updatedMember = await Members.findOneAndUpdate({ id: userId }, dataWithTimestamp, {
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

/**
 * 회원 탈퇴 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 회원 탈퇴 기능 관련 DB작업이 모여있는 service입니다.
 */
async function deleteMember(userId) {
	try {
		// 현재 시간을 삭제됨 시각으로 설정
		const deletedAt = new Date();

		// userId를 사용하여 사용자를 찾고, deletedAt 필드를 업데이트함으로써 소프트 삭제 수행
		const result = await Members.updateOne({ id: userId }, { $set: { deletedAt: deletedAt } });

		// 업데이트된 문서의 수를 확인하여 삭제 성공 여부 판단
		if (result.nModified === 0) {
			return null; // 문서가 업데이트되지 않았다면, null 반환
		}

		return { userId, deletedAt }; // 삭제 성공 시, 삭제된 사용자의 ID와 삭제 시각 반환
	} catch (err) {
		throw err; // 에러가 발생한 경우, 에러를 다시 던져 호출자에게 전달
	}
}
module.exports = { signUp, login, getMember, updateMember, deleteMember };
