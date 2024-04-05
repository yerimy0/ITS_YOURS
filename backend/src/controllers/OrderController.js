const OrderService = require("../service");

/** 주문정보 조회 */
const getOrderInfo = async (req, res, next) => {
  try {
    const orderService = new OrderService();

    const { buyId } = req.params;

    // buyId 또는 prodId를 이용하여 주문 내역 조회
    const order = await orderService.getOrderById({ buyId });

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

module.exports = { getOrderInfo };
