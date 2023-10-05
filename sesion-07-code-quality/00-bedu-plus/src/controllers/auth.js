const { findByUsername } = require("../services/user");
const jwt = require("jsonwebtoken");

exports.login = async function (request, response) {
	const { username, password } = request.body;

	const user = await findByUsername(username);

	if (!user) {
		return response.status(401).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	if (user.password !== password) {
		return response.status(401).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	const token = jwt.sign(
		{ id: user.id, username: user.username },
		process.env.JWT_SECRET
	);

	response.status(200).json({
		jwt: token,
	});
};
