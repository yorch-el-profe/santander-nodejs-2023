const express = require("express");
const router = express.Router();
const {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
} = require("../controllers/post");

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
