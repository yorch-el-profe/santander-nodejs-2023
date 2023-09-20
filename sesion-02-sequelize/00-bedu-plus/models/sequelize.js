const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./bedu-plus.db",
});

exports.sequelize = sequelize;

exports.connect = async function () {
	try {
		await sequelize.authenticate();
		console.log("> Conectado a la base de datos");
	} catch (e) {
		console.error("> No se puede conectar a la base de datos");
		console.error(e);
	}
};

exports.sync = async function () {
	try {
		await sequelize.sync({ force: true });
		console.log("> Base de datos actualizada");
	} catch (e) {
		console.error("> no se puede actualizar la base de datos");
		console.error(e);
	}
};
