const { insert } = require("../services/user");
const { createUserSchema } = require("../validations/user");

/*
exports.createUser = function (request, response) {
	const { email, username, password } = request.body;
	userService
		.createUser({ email, username, password })
		.then((user) => response.json(user));
};
*/

exports.createUser = async function (request, response) {
	const result = createUserSchema.validate(request.body, { abortEarly: false });

	if (result.error) {
		return response
			.status(400)
			.json({ error: "Entrada inválida", details: result.error.details });
	}

	const { email, username, password } = request.body;
	const user = await insert({ email, username, password });
	response.status(201).json(user);
};
