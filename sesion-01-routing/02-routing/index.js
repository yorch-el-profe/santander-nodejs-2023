const express = require("express");
const app = express();

const helloRouter = require("./routers/hello");
const goodbyeRouter = require("./routers/goodbye");

// Instalando los múltiples routers en una sola app
// Plot Twist: En Express TODO PUEDE SER MIDDLEWARE :D
app.use(helloRouter);
app.use(goodbyeRouter);

app.listen(8080, function () {
	console.log("> Escuchando puerto 8080");
});
