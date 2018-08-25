var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/crypto-tracker5');

module.exports.Category = require('./Category');
