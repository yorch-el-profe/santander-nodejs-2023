const express = require("express");
const router = express.Router();
const {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
} = require("../controllers/post");

router.get("/getPosts", getPosts);
router.get("/getPost/:id", getPost);
router.get("/createPost", createPost);
router.get("/updatePost/:id", updatePost);
router.get("/deletePost/:id", deletePost);

module.exports = router;
