exports.getPosts = function (request, response) {
	response.json([]);
};

exports.createPost = function (request, response) {
	console.log(request.body);
	response.send("Articulo creado");
};
