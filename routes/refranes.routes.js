const express = require('express');
const router = express.Router();
const Refran = require('./../models/refranes.models')

router.post("/ejemplo", async (req, res) =>{

  const refran_nuevo = await Refran.create({
    refran: "ejemplo_refran",
    isoglosa:"ejemplo_refran",
    acto_de_habla:"ejemplo_refran",
    explicacion:"ejemplo_refran",
    ejemplo:"ejemplo_refran",
  });
  res.send(refran_nuevo);
  console.log(refran_nuevo);
})

module.exports = router;
