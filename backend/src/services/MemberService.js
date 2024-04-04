const { Members } = require("../models");

class MemberService {
    async signUp(id, password, realName, email, univName, phoneNum) {
        const newMember = {
          id: id,
          password: password,
          realName: realName,
          email: email,
          univName: univName,
          phoneNum: phoneNum
        };
        const member = await Members.create(newMember);
        return member;
      }
}

module.exports = MemberService;