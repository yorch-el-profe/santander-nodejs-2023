const Joi = require("joi");

const person = {
	name: "Albert",
	lastName: "Einstein",
	age: 30,
	email: "albert@gmail.com",
	status: "ALIVE",
};

const person2 = {
	name: 123,
	lastName: null,
	age: -1,
	email: true,
	status: "alive2",
};

// 1. Crear un esquema de validación

// .object() -> Lo que voy a validar son objetos
const schema = Joi.object({
	// .string() -> Valida que la propiedad sea un String
	// .max(n) -> La longitud de la cadena debe ser a lo más "n"
	// .required() -> Pide que la propiedad exista de manera obligatoria
	name: Joi.string().max(100).required().messages({
		"string.base": "El campo name debe ser una cadena de texto",
		"string.max": "El campo name debe ser menor o igual a 100 caracteres",
		"string.required": "El campo name es obligatorio",
	}),
	lastName: Joi.string().max(50).required(),
	// .option() -> Hace el campo opcional
	age: Joi.number().min(0).max(120).optional(),
	// .email() -> Valida que el formato sea un email
	email: Joi.string().email().required(),
	// .uppercase() -> Pide que toda la cadena de texto sea en mayúsculas
	status: Joi.string().uppercase().valid("ALIVE", "DEAD").required(),
});

// abortEarly: false -> Muestra todos los errores
let result = schema.validate(person, { abortEarly: false });
console.log("Validaciones de person", result);

// convert: false -> Impide que los datos se conviertan de acuerdo a
// ciertas validaciones (por ejemplo uppercase)
result = schema.validate(person2, { abortEarly: false, convert: false });
console.log("Validaciones de person2", result.error);

const person3 = {
	name: "David",
	addresses: [
		{
			street: "jhdkasdh",
			int: 2,
			ext: 400,
		},
		{
			fullAddress: "Calz. Ermita 133 int. 5",
		},
		{
			fullAddress: "jhasdkjhasdkjhasdkjhasdkjh",
		},
	],
};

const complexSchema = Joi.object({
	name: Joi.string().required(),
	addresses: Joi.array().items(
		Joi.object({
			street: Joi.string().required(),
			int: Joi.number(),
			ext: Joi.number(),
		}),
		Joi.object({
			fullAddress: Joi.string().required(),
		})
	),
});

result = complexSchema.validate(person3);
console.log("Validaciones de person3", result.error);
