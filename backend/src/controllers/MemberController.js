const MemberService = require("../services/MemberService");

const signUp = async (req, res, next) => {
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
    res.status(200).json({ data: member, message: "회원 가입 성공" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { id, password } = req.body;
    const memberService = new MemberService();

    const loginResult = await memberService.login(id, password);
    if (loginResult === false) {
      // 로그인 실패 시 처리
      res.status(401).json({
        message: "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.",
      });
    } else {
      // 로그인 성공 시 처리
      const [accessToken, isAdmin] = loginResult;
      res.status(200).json({
        isAdmin: isAdmin,
        accessToken: accessToken,
        message: "로그인에 성공했습니다!",
      });
    }
  } catch (error) {
    next(error);
  }
};

// 회원정보 조회
const getMemberInfo = async (req, res, next) => {
  try {
    const userId = req.id;

    const memberService = new MemberService();
    const memberInfo = await memberService.getMemberInfo(userId);

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

module.exports = { signUp, login, getMemberInfo };
