const { Members } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
class MemberService {
  async signUp(id, password, realName, email, univName, phoneNum) {
    const hashedPassword = await bcrypt.hash(password, 8);
    const newMember = {
          id: id,
          password: hashedPassword,
          realName: realName,
          email: email,
          univName: univName,
          phoneNum: phoneNum
    };
    const member = await Members.create(newMember);
    return member;
  }

  async login(id, password) {
    let isAdmin;
    const member = await Members.findOne({ id });
    const is_pass = await bcrypt.compare(password, member.password);
    if (member && is_pass) {
      // access 토큰
      const accessToken = jwt.sign(
        {
          user: {
            username: member.name,
            id: member.id
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "14d" }
      );

      isAdmin = member.isAdmin;

      return [accessToken, isAdmin];
    } else return false;
  }
}

module.exports = MemberService;