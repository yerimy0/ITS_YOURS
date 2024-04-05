const { Members } = require("../models");

class MemberService {
  async signUp(id, password, realName, email, univName, phoneNum) {
    const newMember = {
      id: id,
      password: password,
      realName: realName,
      email: email,
      univName: univName,
      phoneNum: phoneNum,
    };
    const member = await Members.create(newMember);
    return member;
  }

  async getUserInfo(userId) {
    const memberInfo = await Members.findOne({ userId });
    return memberInfo;
  }
}

module.exports = {
  MemberService,
  getUserInfo,
};
