var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); // Plugin para tener las funciones de passport en mi modelo


var User = new Schema({
 favoritos: [{type: mongoose.Schema.Types.ObjectId, ref: 'movies'}]
 
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);