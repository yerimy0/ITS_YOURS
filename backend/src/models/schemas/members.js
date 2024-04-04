const { Schema } = require("mongoose");

const MembersSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }, 
        realName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        univName: {
            type: String,
            required: true
        },
        phoneNum: {
            type: String,
            required: true
        },
        likeCount: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: () => Date.now() + 9 * 60 * 60 * 1000
        }
    }
);

module.exports = MembersSchema;