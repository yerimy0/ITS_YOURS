const mongoose = require("mongoose");

const MembersSchema = require("./schemas/Members");
const ProductsSchema = require("./schemas/Products");

exports.Members = mongoose.model("Members", MembersSchema);
exports.Products = mongoose.model("Products", ProductsSchema);
