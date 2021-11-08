const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.models');

const verificar = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
      res.status(401).send('No estas autorizado')
    }
  }

router.get('/auth', verificar, (req, res) => {
    res.send('Estas autorizado')
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Has cerrado sesion')
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).send('Error en el servidor');
        } else if (!user) {
            res.status(404).send('El usuario no existe');
        } else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    res.status(500).send('Error en el servidor');
                } else if (!isMatch) {
                    res.status(404).send('Usuario o contraseña incorrecta');
                } else {
                    res.status(200).send('Sesion iniciada con exito');
                    req.session.isAuth = true;
                    req.session.save();
                }
            });
        }
    })
})

router.post('/registrar', verificar, (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const user = new User({ username, password });

    user.save((err) => {
        if (err) {
            res.status(500).send('Error al registrar el usuario'); //usuario ya existente
        } else {
            res.status(200).send('Usuario registrado');
        }
    });
});

module.exports = router;