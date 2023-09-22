const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");

router.get("/createUser", createUser);

module.exports = router;
