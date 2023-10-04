/**
 * 1. Definir la estructura de la prueba
 * utilizando las funciones "describe" e "it"
 *
 * La función "describe" sirve para agrupar varias pruebas.
 *
 * La función "it" es el código de la prueba como tal.
 */

/**
 * 2. Utilizar las AAA para escribir los casos de prueba.
 * Arrange: Configuraciones previas para ejecutar una prueba.
 * Act: La ejecución del código a probar
 * Assert: Comprobar los resultados esperados
 */

const { it } = require("node:test");
const { sum, sub, mult } = require("./calculator");

describe("Calculator Test", () => {
	describe("sum() test", () => {
		// Caso de prueba
		// Voy a probar que sum(0, 0) = 0
		it("should return 0 if a = 0 and b = 0", () => {
			// Act: probar la ejecución de la función sum
			const result = sum(0, 0);

			// Assert: comprobar que la suma de 0 con 0 es 0
			// Esperaría que la variable "result" sea igual a 0
			expect(result).toBe(0);
		});

		it("should sum decimal numbers and integers", () => {
			const result = sum(10, 0.5);
			expect(result).toBe(10.5);
		});
	});

	describe("sub() test", () => {
		it("should substract two numbers", () => {
			const result = sub(10, 5);
			expect(result).toBe(5);
		});
	});

	describe("mult() test", () => {
		it("should return 0 if a = 0 or b = 0", () => {
			const result = mult(0, 2);
			const result2 = mult(400, 0);

			expect(result).toBe(0);
			expect(result2).toBe(0);
		});
	});

	describe("div() test", () => {});
});
