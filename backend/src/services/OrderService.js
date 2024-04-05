const { Products } = require("../models");

class OrderService {
  /**
   * 주문정보조회 service
   * 작성자 : 유경아
   * 작성 시작일 : 2024-04-04
   * 주문정보조회시 동작되는 DB작업을 모아놓은 service입니다.
   */
  async getOrderInfo(buyerId) {
    // 상품에서 구매자 아이디와 일치하고 거래완료여부가있는 주문을 찾기
    const order = await Products.find({
      $and: [
        { buyerId: buyerId.toString() },
        { isCompleted: { $exists: true } },
      ],
    });
    return order;
  }
}

module.exports = OrderService;
