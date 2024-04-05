const { Products } = require("../models");

class OrderService {
  async getOrderInfo() {
    //주문내역조회 -> 뭐를샀더라?? -> 로그인필요 -> 판매내역(내꺼만보임) => 나의id
    //채팅을 통해서 거래내역확인을 할수있음(isCompleted - 거래완료가 완료 되었을때)
    // 로그인사람 똑같은지 -> isCompleted가 true 일경우

    const newUserinfo = {};
    const memberInfo = await Members.find({});
    // 가장 최신의것 하나

    
    return memberInfo;
  }
}

module.exports = {
  getOrderInfo,
};
