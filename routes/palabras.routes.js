const express = require('express');
const router = express.Router();
const Palabra = require('./../models/palabra.models')

router.post("/ejemplo", async (req, res) => {

  const palabra_nueva = await Palabra.create({
      nombre: "",
      informacion_gramatical: "",
      hiperonimo: "",
      hiponimo: "",
      significado: "",
      ejemplo: "",
    });
    res.send(palabra_nueva);
    console.log(palabra_nueva);
})

module.exports = router;
