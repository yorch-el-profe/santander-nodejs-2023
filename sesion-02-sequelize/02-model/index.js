const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "root",
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

/*
  CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    views INTEGER 
  );
*/

// El id se omite ya que sequelize lo crea

const Task = sequelize.define("tasks", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING(),
		allowNull: false,
	},
	views: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
});

async function sync() {
	try {
		await sequelize.sync();
		console.log("> Base de datos actualizada!");
	} catch (e) {
		console.error("> No se puede actualizar la base de datos");
		console.error(e);
	}
}

sync();
