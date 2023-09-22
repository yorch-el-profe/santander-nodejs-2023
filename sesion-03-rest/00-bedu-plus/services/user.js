const User = require("../models/user");

exports.insert = function (data) {
	return User.create(data);
};
