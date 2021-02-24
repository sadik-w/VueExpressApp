var model = require('./model')
const Mock = require('mockjs')
var mongoose = require('../db');
var data = Mock.mock({
  'user_info|100': [{
    username: '@first',
    password: /[A-Z][a-z]{3,5}[0-9]{5,10}/,
    email: '@email'
  }]
});

console.log(data);

model.user_info.create(data.user_info, (err, doc) => {
  console.log(`result :${doc}`);
  console.log(err);
  mongoose.connection.close()
  console.log("------数据库关闭成功！------");
});
