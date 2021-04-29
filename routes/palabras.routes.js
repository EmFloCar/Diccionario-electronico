const express = require('express');
const router = express.Router();
const Palabra = require('./../models/palabra.models')

router.post("/ejemplo", async (req, res) => {

  const palabra_nueva = await Palabra.create({
      nombre: "ejemplo_palabra",
      informacion_gramatical: "ejemplo_palabra",
      hiperonimo: "ejemplo_palabra",
      hiponimo: "ejemplo_palabra",
      significado: "ejemplo_palabra",
      ejemplo: "ejemplo_palabra",
    });
    res.send(palabra_nueva);
    console.log(palabra_nueva);
})

module.exports = router;
