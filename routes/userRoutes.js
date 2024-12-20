const express = require("express");
const userController = require("../controllers/userController.js");

const router = express.Router();

// RESTful API 엔드포인트 정의
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
