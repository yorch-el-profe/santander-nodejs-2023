const User = require("../models/user");

exports.createUser = function (data) {
	return User.create(data);
};
