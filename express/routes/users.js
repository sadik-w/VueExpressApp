
/* GET users listing. */
const router = (req, res) => {
  // console.log(req.params);
  var data = {
    code: 0,
    data: {
      name: 'aaa',
      pwd: '123'
    },
    isSuccess: true,
    msg: "请求成功"
  }
  res.json(data);
};

module.exports = router;
