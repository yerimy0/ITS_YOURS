const { Router } = require("express");

const getOrderInfo = require("../controllers/OrderController");

const router = Router();
// 회원정보 조회
router.get("/:buyerId", getOrderInfo);

module.exports = router;
