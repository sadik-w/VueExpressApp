var schema = require('./schema')
var mongoose = require("../db");
var user_info = mongoose.model('user_info', schema.user_info, "USER_INFO");

module.exports = {
  user_info: user_info,
}
