const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");

exports.initDatabase = async function () {
	// "Un usuario crea muchas publicaciones"
	User.hasMany(Post);
	Post.belongsTo(User);

	// "Una publicación tiene muchos comentarios"
	Post.hasMany(Comment);
	Comment.belongsTo(Post);

	// "Un usuario crea muchos comentarios"
	User.hasMany(Comment);
	Comment.belongsTo(User);

	await connect();
	await sync();
};
