const User = require("../models/user");

exports.insert = function (data) {
	return User.create(data);
};

exports.findByUsername = function (username) {
	// SELECT * FROM users WHERE username = '...';
	return User.findOne({
		where: {
			username,
		},
	});
};

exports.findById = function (id) {
	// SELECT * FROM users WHERE id = '...';
	return User.findByPk(id);
};
