const MemberService = require("../services/MemberService");

/**
 * 회원가입 controller
 * 작성자 : 이정은
 * 작성 시작일 : 2024-04-04
 * 기능 : 회원 가입시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const signUp = async (req, res, next) => {
  try {
    const { id, password, realName, email, univName, phoneNum, nickName } = req.body;
    //서비스 객체 생성
    const memberService = new MemberService();
    //서비스 접근, signUp 메소드 실행
    const member = await memberService.signUp(
      id,
      password,
      realName,
      email,
      univName,
      phoneNum,
      nickName
    );
    //통신 실패
    if (!member) {
      throw new Error("서버 오류 입니다.");
    }
    //통신 성공
    res.status(200).json({ data: member, message: "회원 가입 성공" });
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
    const memberService = new MemberService();
    //로그인 결과값
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
        //관리자 여부: true -> 관리자/ false -> 일반회원
        isAdmin: isAdmin,
        //엑세스 토큰값
        accessToken: accessToken,
        message: "로그인에 성공했습니다!",
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
 * 회원정보 기능에 필요한 동작들을 모아놓은 controller입니다.
 */
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
    const memberService = new MemberService();
    const updatedMember = await memberService.updateMember(userId, req.body);

    res.json({
      message: "회원 정보가 성공적으로 업데이트되었습니다.",
      data: updatedMember,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { signUp, login, getMemberInfo, updateMember };
