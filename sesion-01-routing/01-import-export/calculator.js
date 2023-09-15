exports.PI = 3.1416;

exports.sum = function (a, b) {
	return a + b;
};

function sub(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

// CommonJS: require(), exports, module.exports
// Exportando una variable llamada "PI"
// exports.PI = PI;

// Utilizar "exports" es exportar cosas (funciones/variables/clases)
// por partes
// exports.sum = sum;
exports.sub = sub;
exports.mult = mult;

// Exportar TODO de un jalon
/*module.exports = {
	PI,
	sum,
	sub,
	mult,
};*/

// WARNING:
// exports y module.exports no se pueden combinar
