const express = require("express");
const router = express.Router();

router.get("/goodbye", function (request, response) {
	response.send("Good Bye!");
});

module.exports = router;
