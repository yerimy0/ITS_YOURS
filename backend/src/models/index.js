const mongoose = require("mongoose");

const MembersSchema = require("./schemas/Members");

exports.Members = mongoose.model("Members", MembersSchema);
