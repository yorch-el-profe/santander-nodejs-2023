const Post = require("../models/post");

exports.findAll = function () {
	return Post.findAll();
};

exports.findById = function (id) {
	return Post.findByPk(id);
};

exports.insert = function (data) {
	return Post.create(data);
};

exports.update = async function (id, data) {
	await Post.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const post = await Post.findByPk(id);
	await post.destroy();
};
