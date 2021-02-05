var validate = require('./request').validate;
const user_info = (req, res) => {
  // var params = (req.method === 'POST') ? req.body : req.query;
  var params = validate(req);
  console.log(params)
  var data = {
    code: 200,
    data: {
      name: 'aaa',
      pwd: '123'
    },
    isSuccess: true,
    msg: "请求成功"
  }
  res.json(data);
};

module.exports = {
  user_info: user_info,
}
