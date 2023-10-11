const router = require("../../src/routers/post");
const request = require("supertest");
const express = require("express");
const generateToken = require("../jwt");
const { initDatabase } = require("../../src/db");
const insertUser = require("../db");
const validationError = require("../../src/middlewares/validation-error");
const unknownError = require("../../src/middlewares/unknown-error");

describe("Post End-to-end Test", () => {
	describe("POST /posts", () => {
		let app;
		let token;

		beforeAll(() => {
			app = express();

			app.use(express.json());
			app.use(router);
			app.use(validationError);
			app.use(unknownError);
		});

		beforeEach(async () => {
			token = generateToken();

			await initDatabase();
			await insertUser();
		});

		it("should return error 401 if there's no token", async () => {
			const response = await request(app).post("/posts").send();
			expect(response.statusCode).toBe(401);
		});

		it("should return error 400 if request body is invalid", async () => {
			const response = await request(app)
				.post("/posts")
				.set({
					Authorization: `Bearer ${token}`,
				})
				.send({
					title: "",
					content: null,
				});

			expect(response.statusCode).toBe(400);
		});

		it("should return status 201 if the post is inserted in database", async () => {
			const response = await request(app)
				.post("/posts")
				.set({
					Authorization: `Bearer ${token}`,
				})
				.send({
					title: "Una publicación de prueba",
					content:
						"Esto es una publicación de prueba para saber si sí se está insertando en base de datos",
				});

			expect(response.statusCode).toBe(201);
		});
	});
});
