//接口管理文件
var createError = require('http-errors');
var interface = require('./response');
var formValide = require('./form');
const route = function (app) {
  app.use((error, req, res, next) => {
    if (error) {
      res.json({ msg: error.message, code: error.code })
    }
    else {
      next()
    }
  });

  app.use('/login', formValide.loginValidate, interface.login);

  app.use('/login_out', interface.login_out);

  app.use('/info', interface.get_user_info);

  app.use('/menu', interface.menu);

  app.use('/app', interface.page);

  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
module.exports = {
  route: route
}