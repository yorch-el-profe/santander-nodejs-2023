const express = require("express");
const router = express.Router();

router.get("/getArticles", function (request, response) {
	response.json([]);
});

module.exports = router;
