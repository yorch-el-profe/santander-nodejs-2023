const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
const validator = require("../middlewares/validator");
const { loginSchema } = require("../validations/user");

router.post("/login", validator.body(loginSchema), login);

module.exports = router;
