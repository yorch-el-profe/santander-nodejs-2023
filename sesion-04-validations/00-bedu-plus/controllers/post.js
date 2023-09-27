const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/post");
const { createPostSchema, updatePostSchema } = require("../validations/post");

exports.getPosts = async function (request, response) {
	const posts = await findAll();
	response.status(200).json(posts);
};

exports.getPost = async function (request, response) {
	const { id } = request.params;
	const post = await findById(id);
	response.status(200).json(post);
};

exports.createPost = async function (request, response) {
	const result = createPostSchema.validate(request.body);

	if (result.error) {
		return response
			.status(400)
			.json({ error: "Entrada inválida", details: result.error.details });
	}

	const { title, content } = request.body;
	// TODO: Implementar el userId del token JWT
	const post = await insert({ title, content, userId: 1 });
	response.status(201).json(post);
};

exports.updatePost = async function (request, response) {
	const result = updatePostSchema.validate(request.body);

	if (result.error) {
		return response
			.status(400)
			.json({ error: "Entrada inválida", details: result.error.details });
	}

	const { title, content } = request.body;
	const { id } = request.params;

	await update(id, { title, content });
	response.status(204).end();
};

exports.deletePost = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
