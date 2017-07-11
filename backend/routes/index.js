var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport=require('passport')
var User=require('../models/users')
var movies=require('../models/movies')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/favorites', (req,res,next)=>{
	console.log(req.user)
	if(req.body.movie){
	var movie=req.body.movie
 console.log(movie)
  console.log('aquiiii',req.cookies)

//pokeDB.findById(req.params.id).populate('comentario').populate('ataques').exec(function(err, pokemon )

	User.findById(req.user._id).populate('favoritos').exec(function(err, user ){
		movies.create({
		ombdID: movie.imdbID,
		Title: movie.Title,
		Year: movie.Year,
		imgUrl:movie.Poster,
		Director:movie.Director

	}, function (err, movie){
		console.log(user)
		if (err){
		
			console.log(err)
			res.send(err)
		}else{	
				user.favoritos.unshift(movie)
				user.save(function (err){
						User.findById(req.user._id).populate('favoritos').exec(function(err,user){
						if(err){
							console.log(err)
							res.send(err)
						}else{
							console.log(user.favoritos)
							res.send(user.favoritos)
						}
					})
				})	
				//
			
			//			
		}


	} )


})}else{


		User.findById(req.user._id).populate('favoritos').exec(function(err,user){
						if(err){
							console.log(err)
							res.send(err)
						}else{
							console.log(user.favoritos)
							res.send(user.favoritos)
						}
					})


	}

})

module.exports = router;




