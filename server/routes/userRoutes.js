const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/user/:id", userController.getUser);
router.get("/api/user/all", userController.getAllUsers);
router.post("/api/user/signup", userController.createUser);

module.exports = router;
