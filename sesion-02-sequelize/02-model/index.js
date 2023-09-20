const { Sequelize, DataTypes } = require("sequelize");

/*const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./example.db",
});*/

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
    views INTEGER DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL
  );
*/

// El id se omite ya que sequelize lo crea

const Task = sequelize.define(
	"tasks",
	{
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		views: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		isActive: {
			field: "is_active",
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

/*
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL
  )
*/
const User = sequelize.define(
	"users",
	{
		username: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

// En la tabla "tasks" se va agregar una llave
// foránea de la tabla "users"

// Relación uno a muchos
// "Un usuario puede crear varias tareas"
User.hasMany(Task);
Task.belongsTo(User);

// Relación muchos a muchos
// "Muchos usuarios pueden estar asignados a muchas tareas"
User.belongsToMany(Task, { through: "assignments", timestamps: false });
Task.belongsToMany(User, { through: "assignments", timestamps: false });

async function sync() {
	try {
		// Crea/actualiza las tablas dentro de la base de datos
		await sequelize.sync({ force: true });
		console.log("> Base de datos actualizada!");
	} catch (e) {
		console.error("> No se puede actualizar la base de datos");
		console.error(e);
	}
}

sync();
