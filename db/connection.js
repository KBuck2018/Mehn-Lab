//Kevin's contribution
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/repoLink");

mongoose.Promise = Promise;

module.exports = mongoose;