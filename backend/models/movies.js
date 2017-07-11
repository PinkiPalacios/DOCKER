var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var movies = new Schema ({
	ombdID: String,
	Title: String,
	Year: String,
	imgUrl: String,
	Director: String
})

module.exports = mongoose.model('movies', movies);