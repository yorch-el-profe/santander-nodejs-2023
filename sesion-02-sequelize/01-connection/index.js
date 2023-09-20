const { Sequelize } = require("sequelize");

/* Conexión con SQLITE 3
const sequelize = new Sequelize({
	// Indicamos que vamos a conectarnos con Sqlite
	dialect: "sqlite",
	// Dónde se va almacenar el archivo de la BD
	storage: "./example.db",
}); */

// Conexión con MySQL
const sequelize = new Sequelize({
	// Indicamos que vamos a conectarnos con MySQL
	dialect: "mysql",

	// Cuál es el host de la base de datos
	host: "localhost",

	// Usuario para conectarse a MySQL
	username: "root",

	// Contraseña para conectarse a MySQL
	password: "root",

	// El nombre de la base de datos
	database: "sequelize_example",
});

async function connect() {
	try {
		await sequelize.authenticate();
		console.log("> Conectado a la base de datos :D");
	} catch (e) {
		console.error("> No se pudo conectar con la base de datos :(");
		console.error(e);
	}
}

connect();
