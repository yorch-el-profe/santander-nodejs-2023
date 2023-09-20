require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const postRouter = require("./routers/post");
const userRouter = require("./routers/user");
const commentRouter = require("./routers/comment");

app.use(postRouter);
app.use(userRouter);
app.use(commentRouter);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
