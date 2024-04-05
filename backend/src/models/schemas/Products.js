const { Schema } = require("mongoose");

const MembersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrls: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  wishesCount: {
    type: Number,
  },
  region: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
});
