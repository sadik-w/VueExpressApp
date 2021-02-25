var validate = require('./request').validate;
var model = require('../db/model');
var path = require('path');
var validationResult = require('express-validator/check').validationResult;
var jsonData = require('./methods')


module.exports.get_user_info = (req, res, next) => {//获取用户信息
  res.json(req.session);
};

module.exports.login = (req, res, next) => {//登录
  var data = validate(req);
  var errors = validationResult(req);
  if (errors.isEmpty()) {
    model.user_info.findOne({ 'username': data.username }, function (err, docs) {
      if (data.password === docs.password) {
        req.session.regenerate(function (err) {//生成token
          if (err) {
            res.json(jsonData.SYSTEM_ERROR_JSON);
          }
          req.session.username = data.username;//添加token的username authority
          req.session.authority = docs.authority;
          res.json({ code: 200, msg: '登录成功' });
        });
      }
      else {
        res.json({ code: 500, msg: '密码错误' });
      }
    })
  }
  else {
    res.json({ errors: errors.mapped() });
  }
}

module.exports.login_out = (req, res, next) => {//退出登录
  if (req.session.name) {
    console.log(req.session.username)
    req.session.destroy(function (err) {
      if (err) {
        res.json({ code: 500, msg: '退出登录失败' });
        return;
      }
      // req.session.loginUser = null;
      res.clearCookie('TOKEN');
      res.json({ code: 200, msg: '退出成功' });
    });
  } else {
    res.json({ code: 500, msg: '没有登录' });
  }

}
module.exports.menu = (req, res, next) => {//访问页面
  console.log(req.session);
  if (req.session.name) {
    var authority = req.session.authority;
    model.menu.find({ 'authority': authority }, function (err, docs) {
      if (err) {
        console.log(err)
      }
      console.log(docs)
      res.json(docs)
    })
  } else {
    res.json({ code: 500, msg: '没有登录' })
  }
}

module.exports.page = (req, res, next) => {//访问页面
  res.sendFile(path.join(__dirname, '../public/index.html'));
}
