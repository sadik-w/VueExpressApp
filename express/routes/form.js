
var check = require('express-validator/check').check;
var oneOf = require('express-validator/check').oneOf;
var model = require('../db/model');

module.exports.loginValidate = [
  check('username').custom(value => {
    return new Promise((resolve, reject) => {
      model.user_info.findOne({ username: value }, (err, res) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res);
        }
        else {
          reject('查无此用户');
        }
      })
    })
  })
]

