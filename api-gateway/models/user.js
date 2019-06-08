
/**
 Fields username, password, and email
 */

//creating userSchema
var mongoose = require('mongoose');

//userSchema incudes  username,password and email
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//exporting userSchema
module.exports = mongoose.model('User', userSchema);

//adds a new user to the database 
module.exports.add = (user, callback) => {
    user.save(callback)
}
module.exports.getById = (id, callback) => {
    var query = { _id: id };
    User.findById(query, callback);
}
