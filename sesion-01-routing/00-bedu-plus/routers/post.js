const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/post");

router.get("/getPosts", getPosts);
router.get("/createPost", createPost);

module.exports = router;
