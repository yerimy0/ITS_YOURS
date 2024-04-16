const { Members, Wishes } = require('../models/index');
const { sendCustomEmail } = require('../utils/Mailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

/**
 * 회원가입 service
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-03
 * 회원가입시 동작되는 DB작업을 모아놓은 service입니다.
 */
async function signUp(id, password, realName, email, region, schoolName, nickName, profilePic) {
	//사용자 입력 비밀번호 해시화
	const hashedPassword = await bcrypt.hash(password, 8);
	const newMember = {
		id: id,
		password: hashedPassword,
		realName: realName,
		email: email,
		region: region,
		schoolName: schoolName,
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
	// 회원정보
	const member = await Members.findOne({ id });
	if (!member) return null;

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
					profilePic: member.profilePic,
					isAdmin: member.isAdmin,
				},
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '14d' }, // 토큰 유효기간
		);
		// 액세스 토큰 & 관리자 회원여부 반환
		return { accessToken }; // 객체로 반환
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
	const wishesCount = await Wishes.countDocuments({ userId: userId }); // 찜한 상품의 개수 조회

	if (memberInfo) {
		return {
			...memberInfo.toObject(), // Mongoose 문서 객체를 일반 객체로 변환
			wishesCount, // 찜한 상품 개수 추가
		};
	} else {
		return null; // 회원 정보가 없을 경우 null 반환
	}
}

async function getSellerInfo(sellerId) {
	const sellerInfo = await Members.findOne({ id: sellerId }).select(
		'id name profilePic nickName region schoolName',
	);
	return sellerInfo;
}

/**
 * 회원 정보 수정 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 회원정보수정 기능 관련 DB작업이 모여있는 service입니다.
 */
async function updateMember(
	userId,
	password,
	realName,
	email,
	region,
	schoolName,
	nickName,
	profilePic,
) {
	const memberInfo = await Members.findOneAndUpdate(
		{ id: userId },
		{
			password: password,
			realName: realName,
			email: email,
			region: region,
			schoolName: schoolName,
			nickName: nickName,
			profilePic: profilePic,
			updatedAt: Date.now() + 9 * 60 * 60 * 1000,
		},
	);
	return memberInfo;
}

/**
 * 회원 탈퇴 service
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-05
 * 회원 탈퇴 기능 관련 DB작업이 모여있는 service입니다.
 */
async function deleteMember(userId) {
	// userId를 사용하여 사용자를 찾고, deletedAt 필드를 업데이트함으로써 소프트 삭제 수행
	const result = await Members.findOneAndUpdate(
		{ id: userId },
		{ deletedAt: Date.now() + 9 * 60 * 60 * 1000 },
	);
	return result;
}

// 아이디 찾기
async function findIdByNameAndEmail(realName, email) {
	const member = await Members.findOne({ realName: realName, email: email });
	if (!member) {
		throw new Error('해당하는 사용자가 없습니다.');
	}
	return member.id;
}

// 비밀번호 찾기
// 랜덤한 비밀번호 생성!!!!
function generateTempPassword(length) {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString('hex') // 바이트를 hex 문자열로 변환
		.slice(0, length); // 원하는 길이로 문자열을 자릅니다
}

async function resetPasswordAndSendEmail(id, email) {
	const member = await Members.findOne({ id: id, email: email });
	if (!member) {
		throw new Error('해당하는 사용자가 없습니다.');
	}

	const tempPassword = generateTempPassword(10); // 예를 들어, 길이가 10인 임시 비밀번호 생성
	const hashedPassword = await bcrypt.hash(tempPassword, 10);

	await Members.updateOne({ id: id }, { password: hashedPassword });

	await sendCustomEmail({
		to: email,
		subject: '[이제너해] 임시 비밀번호 발급 안내',
		newPassword: tempPassword, // 랜덤하게 생성된 임시 비밀번호를 전달
	});

	return true;
}

async function sendVerifiyEmail(email) {
	const verifyCode = generateTempPassword(4);
	console.log(verifyCode);
	await sendCustomEmail({
		to: email,
		subject: '[이제너해] 회원가입 인증코드입니다',
		templateName: 'SignUpEmailForm',
		newPassword: verifyCode, // 랜덤하게 생성된 인증코드를 전달
	});

	return true;
}

module.exports = {
	signUp,
	login,
	getMember,
	getSellerInfo,
	updateMember,
	deleteMember,
	findIdByNameAndEmail,
	resetPasswordAndSendEmail,
	sendVerifiyEmail,
};
