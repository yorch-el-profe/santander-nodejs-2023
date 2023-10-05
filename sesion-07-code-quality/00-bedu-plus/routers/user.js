const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");
const { createUserSchema } = require("../validations/user");
const validator = require("../middlewares/validator");

router.post("/users", validator.body(createUserSchema), createUser);

module.exports = router;
