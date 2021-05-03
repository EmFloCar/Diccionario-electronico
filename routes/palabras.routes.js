const express = require('express');
const router = express.Router();
const Palabra = require('./../models/palabra.models');

router.post("/", async(req, res) => {
  const { nombre, informacion_gramatical, hiperonimo, hiponimo, significado, ejemplo } = req.body;

  const palabra_nueva = await Palabra.create({
      nombre: nombre,
      informacion_gramatical: informacion_gramatical,
      hiperonimo: hiperonimo,
      hiponimo: hiponimo,
      significado: significado,
      ejemplo: ejemplo,
    });
    res.send(palabra_nueva);
})

router.get('/', async(req, res) => {
  const palabras = await Palabra.find();
  res.json(palabras);
});

router.delete('/:id', async(req, res) => {
  await Palabra.findByIdAndRemove(req.params.id);
  res.json("eliminada");
});

module.exports = router;
