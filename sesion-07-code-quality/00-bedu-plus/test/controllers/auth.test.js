const { login } = require("../../src/controllers/auth");
const { findByUsername } = require("../../src/services/user");
const { sign } = require("jsonwebtoken");

jest.mock("jsonwebtoken");
jest.mock("../../src/services/user");

describe("Auth Controller Unit Test", () => {
	describe("login(request, response) test", () => {
		it("should return a json web token if the credentials are correct", async () => {
			// Arrange
			const request = {
				body: {
					username: "test",
					password: "123123123",
				},
			};

			const response = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			findByUsername.mockResolvedValueOnce({
				id: 1,
				username: "test",
				password: "123123123",
			});

			sign.mockReturnValue("esto-es-un-jwt-xd");

			// Act
			await login(request, response);

			// Assert
			expect(response.status).toHaveBeenCalledWith(200);
			expect(response.json).toHaveBeenCalledWith({
				jwt: "esto-es-un-jwt-xd",
			});
		});

		it("should return an error 400 if the username doesnt exist", async () => {
			const request = {
				body: {
					username: "test",
					password: "781923891723981",
				},
			};

			const response = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			findByUsername.mockResolvedValueOnce(null);

			await login(request, response);

			expect(response.status).toHaveBeenCalledWith(400);
			expect(response.json).toHaveBeenCalledWith({
				message: "Usuario o contraseña inválidos",
				messagedev: "No se encontro el usuario en la base de datos",
				code: "ERR_AUTH",
			});
		});

		it("should return an error 400 if the password is not the same", async () => {
			const request = {
				body: {
					username: "test",
					password: "781923891723981",
				},
			};

			const response = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};

			findByUsername.mockResolvedValueOnce({
				id: 1,
				username: "test",
				password: "unacontraseñatodachafaxd",
			});

			await login(request, response);

			expect(response.status).toHaveBeenCalledWith(400);
			expect(response.json).toHaveBeenCalledWith({
				message: "Usuario o contraseña inválidos",
				messagedev: "No se encontro el usuario en la base de datos",
				code: "ERR_AUTH",
			});
		});
	});
});
