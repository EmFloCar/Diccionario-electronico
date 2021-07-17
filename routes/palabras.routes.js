const express = require('express');
const multer = require('multer');
const upload = require('./../libs/storage')
const router = express.Router();
const Palabra = require('./../models/palabra.models');


//AÑADIR NUEVAS PALABRAS
router.post("/", upload.single('file'), async(req, res, next) => {
  try{
  const { lema, informacion_gramatical, hiperonimo, hiponimo, significado, ejemplo, imagenUrl, isoglosa } = req.body;

  const palabra_nueva = Palabra({
      lema,
      informacion_gramatical,
      hiperonimo,
      hiponimo,
      significado,
      ejemplo,
      imagenUrl,
      isoglosa,
    });

      if (req.file) {
    const {filename} = req.file
    palabra_nueva.setImgUrl(filename)
  }

  const guardar = await palabra_nueva.save()
  console.log(palabra_nueva)
    res.send(palabra_nueva);
  }catch (err) {
    next(err);
  }
})

//VER LAS PALABRAS AÑADIDAS
router.get('/', async(req, res) => {
  const palabras = await Palabra.find();
  res.json(palabras);
});

//VER PALABRA POR ID
router.get('/:id', async(req, res) => {
  const palabra = await Palabra.findById(req.params.id);
  res.json(palabra);
});

//ELIMINAR PALABRAS
router.delete('/:id', async(req, res) => {
  await Palabra.findByIdAndRemove(req.params.id);
  res.json("eliminada");
});

//EDITAR PALABRAS
router.put('/:id', async (req, res) => {
  await Palabra.findByIdAndUpdate(req.params.id, req.body)
  res.json("actualizado");
})

module.exports = router;
