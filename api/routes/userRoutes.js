const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/stats", userController.getStats);
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/chatId/:chatId", userController.getUserWithChatId);

module.exports = router;