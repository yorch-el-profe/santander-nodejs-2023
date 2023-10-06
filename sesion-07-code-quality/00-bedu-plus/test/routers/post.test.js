const router = require("../../src/routers/post");
const request = require("supertest");
const express = require("express");

describe("Post End-to-end Test", () => {
	describe("POST /posts", () => {
		it("should return error 401 if there's no token", async () => {
			// Arrange
			const app = express();
			app.use(router);

			// Act
			const response = await request(app).post("/posts").send();

			// Assert
			expect(response.statusCode).toBe(401);
		});

		it("should return status 201 if the post is inserted in database", async () => {});
	});
});
