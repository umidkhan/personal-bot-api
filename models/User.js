const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
      uniqe: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
