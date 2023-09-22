const { insert } = require("../services/user");

/*
exports.createUser = function (request, response) {
	const { email, username, password } = request.body;
	userService
		.createUser({ email, username, password })
		.then((user) => response.json(user));
};
*/
// const variable1 = 0;
// const variable2 = 0;
// const json = { variable1: variable1, variable2: variable2 } => { variable1, variable2 }

exports.createUser = async function (request, response) {
	const { email, username, password } = request.body;
	const user = await insert({ email, username, password });
	response.json(user);
};
