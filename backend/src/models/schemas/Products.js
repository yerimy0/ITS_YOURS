const { Schema } = require("mongoose");

/**
 * 상품 스키마
 * 작성자 : 류효종
 * 작성시작일 : 2024-04-05
 */

const ProductsSchema = new Schema({
  // 상품명
  name: {
    type: String,
    required: true,
  },
  // 상품 이미지
  imgUrls: {
    type: Array,
    required: true,
  },
  // 상품 판매가
  price: {
    type: Number,
    required: true,
  },
  // 저자
  author: {
    type: String,
    required: true,
  },
  // 출판사
  publisher: {
    type: String,
    required: true,
  },
  // 상품 상태
  condition: {
    type: String,
    //required: true,
  },
  // 찜 개수
  wishesCount: {
    type: Number,
  },
  // 지역명
  region: {
    type: String,
    required: true,
  },
  // 상품 설명
  description: {
    type: String,
    //required: true,
  },
  // 판매자 id
  sellerId: {
    type: String,
    //required: true,
  },
  // 구매자 id
  buyerId: {
    type: String
  },
  // 거래 완료여부
  isCompleted: {
    type: Boolean,
  },
  // 상품 등록일자
  createdAt: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
  updatedAt: {
    type: Date
  },
  deletedAt: {
    type: Date
  }
});

module.exports = ProductsSchema;
