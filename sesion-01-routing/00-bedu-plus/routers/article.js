const express = require("express");
const router = express.Router();
const { getArticles, createArticle } = require("../controllers/article");

router.get("/getArticles", getArticles);
router.get("/createArticle", createArticle);

module.exports = router;
