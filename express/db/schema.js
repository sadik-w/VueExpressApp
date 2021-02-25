var mongoose = require("../db");
var Schema = mongoose.Schema;

module.exports.user_info = new Schema({
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
  authority: {
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
module.exports.menu = new Schema({
  authority: {
    type: String,
    required: true,
    unique: false
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true,
    unique: true
  },
  submenu: [{
    title: {
      type: String,
      required: true,
      unique: true
    },
    value: {
      type: String,
      required: true,
      unique: true
    },
  }]
});
