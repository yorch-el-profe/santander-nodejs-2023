// Router es una pieza AISLADA de una aplicación de express

const express = require("express");
const router = express.Router();

router.get("/hello", function (request, response) {
	response.send("Hello World");
});

module.exports = router;
