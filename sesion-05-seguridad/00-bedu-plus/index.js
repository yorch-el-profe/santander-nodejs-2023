require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const postRouter = require("./routers/post");
const userRouter = require("./routers/user");
const commentRouter = require("./routers/comment");
const authRouter = require("./routers/auth");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutas
app.use(postRouter);
app.use(userRouter);
app.use(commentRouter);
app.use(authRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
