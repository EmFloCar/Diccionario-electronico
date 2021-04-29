const express = require("express");
const app = express();
const palabra_rutas = require("./routes/palabras.routes");
const refran_rutas = require("./routes/refranes.routes");
const database = require("./bin/database");



app.use("/palabra", palabra_rutas)
app.use("/refran", refran_rutas)


app.listen(3000, () => {
  console.log("server on");
})
