
const SUCCESS_JSON = {
  code: '200',
  msg: '操作成功'
};
const PERMISSION_DENIED_JSON = {
  code: '300',
  msg: '权限不足'
};
const PARAMETER_EXCEPTION_JSON = {
  code: '400',
  msg: '参数异常'
};
const SYSTEM_ERROR_JSON = {
  code: '500',
  msg: '系统错误'
};

module.exports = {
  SUCCESS_JSON: SUCCESS_JSON,
  PERMISSION_DENIED_JSON: PERMISSION_DENIED_JSON,
  PARAMETER_EXCEPTION_JSON: PARAMETER_EXCEPTION_JSON,
  SYSTEM_ERROR_JSON: SYSTEM_ERROR_JSON,
}