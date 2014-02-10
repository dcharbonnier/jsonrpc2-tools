var util = require('util');
var IntType = require('./int');

/**********************************************************
 UnsignedInt
 ***********************************************************/
function UnsignedIntType() {
  IntType.apply(this, arguments);
}
util.inherits(UnsignedIntType, IntType);
UnsignedIntType.prototype._checkType = function _checkType(value) {

  return UnsignedIntType.super_.prototype._checkType.call(this, value) &&
    value >= 0;
};
module.exports = UnsignedIntType;
