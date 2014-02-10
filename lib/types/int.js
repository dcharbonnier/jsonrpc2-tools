var util = require('util');
var BaseType = require('./base');

/**********************************************************
 Int
 ***********************************************************/

function IntType(settings) {
  BaseType.apply(this, arguments);
  if (settings.max !== undefined) {
    this.max = settings.max;
  } else {
    this.max = null;
  }
  if (settings.min !== undefined) {
    this.min = settings.min;
  } else {
    this.min = null;
  }
}
util.inherits(IntType, BaseType);

IntType.prototype._checkType = function _checkType(value) {
  var test = IntType.super_.prototype._checkType(value) &&
    typeof(value) === 'number' &&
    parseInt(value, 10) === value;
  if (this.max) {
    test = test && value <= this.max;
  }
  if (this.min) {
    test = test && value >= this.min;
  }
  return test;
};
module.exports = IntType;
