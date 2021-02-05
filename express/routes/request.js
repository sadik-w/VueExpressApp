const validate = req => {
  var params = (req.method === 'POST') ? req.body : req.query;
  return params;
}
module.exports.validate = validate