const express = require("express");
const { userLogin, userSignup } = require("../controllers/authController");
const router = express.Router();

router.post("/register", userSignup);
router.post("/login", userLogin);

module.exports = router;
