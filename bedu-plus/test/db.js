const User = require("../src/models/user");

async function insertUser() {
	await User.create({
		id: 1,
		username: "test",
		email: "test@test.com",
		password: "123123123",
	});
}

module.exports = insertUser;
