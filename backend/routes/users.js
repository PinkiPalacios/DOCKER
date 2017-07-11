var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport=require('passport')
var User=require('../models/users')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('login');
// });


var urlParser = bodyParser.urlencoded({ extended:true });

// Formulario de login
router.get('/login', function(req, res) {
  res.render('login');
});
// Procesa el login, usamos authenticate de passport como middleware.
router.post('/login', urlParser, passport.authenticate('local', {
  failureRedirect: '/register',
}), function(req, res) {
  console.log('logeado');
  res.send(true);
});

// Registro de un usuario
router.get('/register', function (req, res) {
	console.log("wtf")
  res.render('register');
});

// Procesa el registro,
router.post('/register', urlParser, function (req, res) {
  console.log(req.body);
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.send('hubo un error durante el registro');
    }

    console.log(user.username)
    res.send({
    	username: user.username
    	//Hay que popular
    });
  });
});

// Logout

router.get('/logout', function(req, res){
   
  req.logout();
 req.session.destroy(function (err) {
        res.send('Deslogeado'); //Inside a callback… bulletproof!
    });

   
  
});

// Middleware
// Si está autenticado, que siga, si no respondemos que no puede pasar.
// Usamos la función req.isAuthenticated() de Passport.
function isLoggedIn(req, res, next) {

  if (req.isAuthenticated()) {
    return next(); // puede pasar
  }
  return res.send('<img src="https://i.ytimg.com/vi/qdYifXP5tVA/maxresdefault.jpg"/>');
}

router.get('/isloged', function(req, res) {
    console.log('entro')
    if (req.isAuthenticated()) {
    res.send({isLoged: true}); // puede pasar
  }else{
   res.send({isLoged: false});
  }
});


// Publica
router.get('/publica', function(req, res) {
  res.send('respond with a resource');
});

// Privada
// Usamos el middleware que creamos arriba
router.get('/privada/', isLoggedIn, function(req, res) {
  res.render('privada');
});

module.exports = router;

