const { createValidator } = require("express-joi-validation");

// passError: true manda el error a express
module.exports = createValidator({
	passError: true,
});
