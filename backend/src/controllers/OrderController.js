const OrderService = require("../services/OrderService");

/**
 * 주문 정보 조회 controller
 * 작성자 : 유경아
 * 작성 시작일 : 2024-04-04
 * 기능 : 회원 정보 조회시 필요한 동작들을 모아놓은 컨트롤러입니다.
 */
const getOrderInfo = async (req, res, next) => {
  try {
    const orderService = new OrderService();

    const buyerId = req.params;

    const order = await orderService.getOrderInfo(buyerId);

    if (!order) {
      return res
        .status(404)
        .json({ data: null, message: "주문 내역을 찾을 수 없습니다." });
    }

    res.status(200).json({ data: order, message: "주문 내역 조회 성공!!!!!" });
  } catch (err) {
    next(err);
  }
};

module.exports = getOrderInfo;
