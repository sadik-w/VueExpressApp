var validate = require('./request').validate;
var model = require('../db/model');
var path = require('path');
var form = require('./form');
var methods = require('./methods')
const get_user_info = (req, res, next) => {//获取用户信息
  res.json(req.session);
};

const login = (req, res, next) => {//登录
  var params = validate(req);
  model.user_info.find({ 'username': params.username }, function (err, docs) {
    console.log(docs)
    if (docs) {
      if (params.password === docs[0].password) {
        req.session.regenerate(function (err) {
          if (err) {
            throw new methods.CUSTOM_ERROR(form.SYSTEM_ERROR,'密码错误')
          }
          req.session.username = params.username;
          res.json({ code: 200, msg: '登录成功' });
        });
      }
      else {
        throw new methods.CUSTOM_ERROR(form.SYSTEM_ERROR,'密码错误')
      }
    }
  })
}

const login_out = (req, res, next) => {//退出登录
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
}

const page = (req, res, next) => {//访问页面
  // res.cookie('isVisit', 1, { maxAge: 60 * 1000, httpOnly: true }) // 该处是设置 cookie 与 httpOnly 
  res.sendFile(path.join(__dirname, '../public/index.html'));
}

module.exports = {
  get_user_info: get_user_info,
  login: login,
  login_out: login_out,
  page: page
}
