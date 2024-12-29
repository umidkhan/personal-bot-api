const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    chatId: {
      type: Number,
      uniqe: true,
      required: true,
    },
    "firstName": {
      type: String,
    },
    "lastName": {
      type: String,
    },
    "username": {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Users", userSchema);