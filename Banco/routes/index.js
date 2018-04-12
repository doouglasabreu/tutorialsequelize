var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',function(req,res,next){ 
  models.usuario.findAll().then(function(usuario){
    res.send(usuario);
  });



});




module.exports = router;



