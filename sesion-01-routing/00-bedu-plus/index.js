require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const articleRouter = require("./routers/article");
const userRouter = require("./routers/user");
const commentRouter = require("./routers/comment");

app.use(articleRouter);
app.use(userRouter);
app.use(commentRouter);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
