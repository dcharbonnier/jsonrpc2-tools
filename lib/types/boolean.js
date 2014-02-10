var util = require('util');
var BaseType = require('./base');

/**********************************************************
 Boolean
 ***********************************************************/

function BooleanType() {
  BaseType.apply(this, arguments);
}
util.inherits(BooleanType, BaseType);

BooleanType.prototype._checkType = function _checkType(value) {
  return BooleanType.super_.prototype._checkType(value) &&
    (value === true || value === false);
};

module.exports = BooleanType;