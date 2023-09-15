exports.getArticles = function (request, response) {
	response.json([]);
};

exports.createArticle = function (request, response) {
	console.log(request.body);
	response.send("Articulo creado");
};
