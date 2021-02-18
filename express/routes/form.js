var methods = require('./methods')
const SYSTEM_ERROR = {
  msg: '系统错误',
  data: {},
  code: methods.SYSTEM_ERROR_CODE
}
module.exports={
  SYSTEM_ERROR:SYSTEM_ERROR
}