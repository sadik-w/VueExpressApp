var mongoose = require("../db");
var Schema = mongoose.Schema;

var user_info = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

module.exports = {
  user_info: user_info,
}