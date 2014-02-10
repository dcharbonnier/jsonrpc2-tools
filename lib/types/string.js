var util = require('util');
var BaseType = require('./base');

/**********************************************************
 String
 ***********************************************************/

function StringType(settings) {
  BaseType.apply(this, arguments);
  if (settings.enum !== undefined) {
    this.enum = settings.enum;
  } else {
    this.enum = null;
  }
}
util.inherits(StringType, BaseType);
module.exports = StringType;

StringType.prototype._checkType = function _checkType(value) {
  return StringType.super_.prototype._checkType(value) &&
    typeof(value) === 'string' && (this.enum === null || this.enum.indexOf(value) !== -1);
};

StringType.prototype.typeDesc = function typeDesc() {
  var name = (/\W*function\s+([\w\$]+)Type\(/.exec(this.constructor.toString())[ 1 ]);

  if (this.enum !== null) {
    name += '(' + this.enum.join(',') + ')';
  }
  return name;
};
