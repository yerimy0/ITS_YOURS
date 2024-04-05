const MemberService = require("../service");

const signup = async (req, res, next) => {
  try {
    const { id, password, realName, email, univName, phoneNum } = req.body;

    const memberService = new MemberService();

    const member = await memberService.signUp(
      id,
      password,
      realName,
      email,
      univName,
      phoneNum
    );
    if (!member) {
      throw new Error("서버 오류 입니다.");
    }
    res.status(200).json({ data: null, message: "회원 가입 성공" });
  } catch (err) {
    next(err);
  }
};

/** 회원정보 조회 */
const getUserInfo = async (req, res, next) => {
  try {
    const userId = req.id;

    const memberService = new MemberService();
    const memberInfo = await memberService.getUserInfo(userId);

    if (!memberInfo) {
      return res
        .status(404)
        .json({ data: null, message: "사용자 정보를 찾을 수 없습니다." });
    }

    // 사용자 정보 조회 성공 응답
    res.status(200).json({ data: memberInfo, message: "회원 정보 조회 성공" });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, getUserInfo };
