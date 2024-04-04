const MemberService = require('../service');

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

  module.exports = signup;