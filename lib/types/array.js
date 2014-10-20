var util = require('util');
var BaseType = require('./base');

/**********************************************************
 Boolean
 ***********************************************************/

function ArrayType() {
    BaseType.apply(this, arguments);
}
util.inherits(ArrayType, BaseType);

ArrayType.prototype._checkType = function _checkType(value) {
    return ArrayType.super_.prototype._checkType(value) &&
      value instanceof Array;
};

module.exports = ArrayType;