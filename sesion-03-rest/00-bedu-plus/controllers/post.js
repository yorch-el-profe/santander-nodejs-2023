const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/post");

exports.getPosts = async function (request, response) {
	const posts = await findAll();
	response.json(posts);
};

exports.getPost = async function (request, response) {
	const { id } = request.params;
	const post = await findById(id);
	response.json(post);
};

exports.createPost = async function (request, response) {
	const { content } = request.body;
	// TODO: Implementar el userId del token JWT
	const post = await insert({ content, userId: 1 });
	response.json(post);
};

exports.updatePost = async function (request, response) {
	const { content } = request.body;
	const { id } = request.params;

	await update(id, { content });
	response.send("Publicación actualizada");
};

exports.deletePost = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.send("Publicacion borrada");
};
