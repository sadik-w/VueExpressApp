var schema = require('./schema')
var mongoose = require("../db");

module.exports.user_info = mongoose.model('user_info', schema.user_info, "USER_INFO");
module.exports.menu = mongoose.model('menu', schema.menu, "MENU");

