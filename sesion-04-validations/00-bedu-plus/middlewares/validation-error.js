// Manejo de errores
// Los middleware de manejo de errores siempre reciben 4 parámetros.
// Nota: Los middlewares normales sólo reciben 3 parámetros (request, response, next)
module.exports = function (err, request, response, next) {
	// Si sucede la siguiente condición, entonces el error
	// fue provocado por express-joi-validation

	// Si resulta que la condición no se cumple, entonces el error
	// es otra cosa.
	if (err && err.error && err.error.isJoi) {
		console.error(err);
		response.status(400).json({
			message: "Los datos de entrada son inválidos",
			messagedev: "El middleware de validación arrojó el siguiente error",
			code: "ERR_VALIDATION",
			details: err.error.details,
		});
	} else {
		// Si no es un error de validación, aviento el error
		// al siguiente middleware.
		next(err);
	}
};
