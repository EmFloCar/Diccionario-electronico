const verificar = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
      res.status(401).send('No estas autorizado')
    }
  }

  
module.exports = verificar