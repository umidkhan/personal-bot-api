const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    chatId: {
      type: Number,
      required: true,
      uniqe: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
