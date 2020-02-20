const express = require("express");
const bodyParser = require("body-parser");
const empresas = require("./empresa/empresa");
const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/procesar", (req, res) => {
const empresa= new empresas();
res.json(empresa.entidad());
});

app.listen(PORT, () => {
  console.log(`Servidor en el puerto: ${PORT}`);
});
