var mongoose = require("mongoose"); //引入mongoose
var DBURL = 'mongodb://localhost:27017/user';

mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect(DBURL, {//连接到mongoDB的todo数据库
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.on("open", function () {
  console.log("------数据库连接成功！------");
});

module.exports = mongoose;