var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: String,
	name: String, 
    password: String,
    userGroup: String, 
    admin: {
    	type: Boolean,
    	default: false
    } 
});

module.exports = mongoose.model('userModel', userSchema);