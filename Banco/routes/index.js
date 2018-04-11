var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',function(req,res,next){ 
  models.usuario.findAll({where : {id: 1}}).then(function(usuario){
    res.send(usuario);

  })

});



module.exports = router;



