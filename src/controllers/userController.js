const UserModel = require("../models/userModel");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const savedUser = await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err, "add user error");
    return res.status(500).json({ message: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { page, limit, chatId } = req.query;
    let data = {};
    if (chatId) {
      data["chatId"] = chatId;
    }

    if (page && limit) {
      let options = {
        page: page,
        limit: limit,
      };

      let docs = await UserModel.paginate(data, options);
      return res.status(200).json(docs);
    } else {
      const users = await UserModel.find(data);
      return res.status(200).json(users);
    }
  } catch (err) {
    console.log(err, "get all users error");
    return res.status(500).json({ message: "Server error" });
  }
};

const getStats = async (req, res) => {
  try {
    const users = (await UserModel.find({})).length;
    return res.status(200).json({"count": users});
  } catch (err) {
    console.log(err, "\nget stats error");
    return res.status(500).json({ message: "Server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err, "get user error");
    return res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(400).json({ message: "User not updated" });
    }
    return res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.log(err, "update user error");
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err, "delete user error");
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getStats,
};
