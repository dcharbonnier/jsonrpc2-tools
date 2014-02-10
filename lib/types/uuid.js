var util = require('util');
var StringType = require('./string');

var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');

/**********************************************************
 UUID
 ***********************************************************/
function UUIDType() {
  StringType.apply(this, arguments);
}
util.inherits(UUIDType, StringType);
UUIDType.prototype._checkType = function _checkType(value) {
  return UUIDType.super_.prototype._checkType.call(this, value) &&
    checkForHexRegExp.test(value);
};
module.exports = UUIDType;
