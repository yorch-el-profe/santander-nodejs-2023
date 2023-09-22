const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("posts", {
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			len: [5, 2500],
		},
	},
	likes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	is_active: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});
