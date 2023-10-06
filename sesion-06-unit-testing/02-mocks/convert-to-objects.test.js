const convertToObjects = require("./convert-to-objects");
const { readFile } = require("fs/promises");

/**
 * Unit Testing: Probar piezas de código aisladas, quitando cualquier dependencia externa.
 *
 * Integration Testing: Pruebas de varios componentes en conjunto. Es posible seguir quitando
 * algunas dependencias externas.
 *
 * E2E (End-to-end) Testing: Flujos completos. Es posible seguir quitando algunas dependencias externas
 * pero NO ES RECOMENDABLE :D
 */

/*
  Mocks son objetos que sirven para simular valores/funcionalidades en una prueba.
*/

// Si quitamos esta línea, la función "convertToObjects" ejecutaría el readFile original.
jest.mock("fs/promises");

describe("Convert To Objects Unit Test", () => {
	describe("convertToObjects() test", () => {
		it("should return an empty array if the file is empty", async () => {
			// Arrange
			// Hará que la función falsa regrese una promesa exitosa con una cadena vacia dentro.
			// return Promise.resolve("");
			readFile.mockResolvedValueOnce("");

			// Act
			const result = await convertToObjects();

			// Assert
			expect(result).toStrictEqual([]);
		});

		it("should return an array with object if the file has lines", async () => {
			readFile.mockResolvedValueOnce(`
      5000|Usuario de Prueba|100|test@test.com
      5001|QA|200|qa@test.com
      `);

			const result = await convertToObjects();

			expect(result).toStrictEqual([
				{
					id: "5000",
					name: "Usuario de Prueba",
					age: "100",
					email: "test@test.com",
				},
				{
					id: "5001",
					name: "QA",
					age: "200",
					email: "qa@test.com",
				},
			]);
		});
	});
});
