exports.sum = function (a, b) {
	if (isNaN(a) || isNaN(b)) {
		throw new Error("Invalid paremerts");
	}

	return a + b;
};

exports.sub = function (a, b) {
	return a - b;
};

exports.mult = function (a, b) {
	return a * b;
};

exports.div = function (a, b) {
	if (b === 0) {
		throw new Error("La división por cero es inválida");
	}

	return a / b;
};
