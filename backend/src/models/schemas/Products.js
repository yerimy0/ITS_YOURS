const { Schema } = require("mongoose");

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrls: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    require: true, // 상품상세에 있으니까 필수..?
  },
  publisher: {
    type: String,
    required: true, // 상세에 있으니까 필수...?
  },
  condition: {
    type: String,
    required: true, // 상품 상태, 필수...?
  },
  wishesCount: {
    type: Number,
  },
  region: {
    type: String,
    required: true, // 지역명, 필수 ..?
  },
  description: {
    type: String,
    required: true,
  },
  /** 모르겠어요....ㅜㅜㅜㅜㅜㅜ */
  sellerId: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "Member", // 판매자 ID, 회원 테이블(members) 참조
  },
  buyerId: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "Member", // 판매자 ID, 회원 테이블(members) 참조
  },
  isCompleted: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});

module.exports = { ProductsSchema };
