const { Members } = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class MemberService {
	/**
	 * 회원가입 service
	 * 작성자 : 이정은
	 * 작성 시작일 : 2024-04-03
	 * 회원가입시 동작되는 DB작업을 모아놓은 service입니다.
	 */
	async signUp(id, password, realName, email, univName, phoneNum, nickName) {
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
	async login(id, password) {
		let isAdmin; //관리자 회원여부
		//회원정보
		const member = await Members.findOne({ id });
		//사용자 입력 비밀번호 vs 해시화된 비밀번호 교차비교
		const is_pass = await bcrypt.compare(password, member.password);
		//회원정보 존재, 로그인 성공
		if (member && is_pass) {
			// access 토큰
			const accessToken = jwt.sign(
				{
					user: {
						username: member.name,
						id: member.id,
					},
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '14d' }, //토큰 유효기간
			);

			isAdmin = member.isAdmin; //관리자 회원여부

			//액세스 토큰 & 관리자 회원여부 반환
			return [accessToken, isAdmin];
		}
		//로그인 실패
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
	async getMemberInfo(userId) {
		const memberInfo = await Members.findOne({ userId });
		return memberInfo;
	}

	/**
	 * 회원 정보 수정 service
	 * 작성자 : 유경아
	 * 작성 시작일 : 2024-04-05
	 * 회원정보수정 기능 관련 DB작업이 모여있는 service입니다.
	 */
	async updateMember(id, { password, realName, email, univName, phoneNum, nickName, profilePic }) {
		try {
			// 사용자 정의 id 필드를 사용하여 회원 검색
			const result = await Members.findOne({ id: id });
			console.log(id);
			console.log(result);

			// 사용자 정의 id 필드를 사용하여 회원 정보 업데이트
			const updatedMember = await Members.findOneAndUpdate(
				{ id: id }, // 여기서는 사용자 정의 id 필드를 사용하여 검색합니다.
				{
					$set: {
						// $set 연산자를 사용하여 지정된 필드만 업데이트합니다.
						password: password,
						realName: realName,
						email: email,
						univName: univName,
						phoneNum: phoneNum,
						nickName: nickName,
						profilePic: profilePic,
						updatedAt: new Date(), // 현재 시간으로 updatedAt 업데이트
					},
				},
				{ new: true }, // 업데이트된 문서를 반환하도록 옵션 설정
			);

			console.log(updatedMember);
			if (!updatedMember) {
				throw new Error('회원 정보를 찾을 수 없습니다.');
			}

			return updatedMember;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * 회원 정보 삭제 service
	 * 작성자 : 유경아
	 * 작성 시작일 : 2024-04-08
	 * 회원정보삭제 기능 관련 DB작업이 모여있는 service입니다.
	 */
	async deleteMember(id) {
		try {
			const result = await Members.findOne({ id: id });
			console.log(result);
			const deletedAt = new Date(); // 현재 시간
			const deleteMember = await Members.findOneAndUpdate(
				{ id: id, deletedAt: null }, // 게시글 ID가 일치하고 아직 삭제되지 않은 게시글을 찾습니다.
				{ $set: { deletedAt: deletedAt } }, // deletedAt을 현재 시간으로 업데이트
				{ new: true }, // 업데이트된 문서를 반환합니다.
			);

			if (!deleteMember) {
				throw new Error('게시글을 찾을 수 없거나 이미 삭제되었습니다.');
			}

			return deleteMember;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = MemberService;
