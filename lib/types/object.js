var util = require('util');
var BaseType = require('./base');

/**********************************************************
 Object
 ***********************************************************/

function ObjectType() {
  BaseType.apply(this, arguments);
}
util.inherits(ObjectType, BaseType);
module.exports = ObjectType;

ObjectType.prototype._checkType = function _checkType(value) {
  return ObjectType.super_.prototype._checkType(value) &&
    typeof(value) === 'object';
};

ObjectType.prototype.typeDesc = function typeDesc() {
  var name = (/\W*function\s+([\w\$]+)Type\(/.exec(this.constructor.toString())[ 1 ]);
  return name;
};
