var util = require('util');
var BaseType = require('./base');

/**********************************************************
 Multiple
 Allow array of types for validation
 ***********************************************************/

function MultipleType(settings) {
  this.types = [];
  for(var i= 0, l= settings.type.length;i<l;i++) {
    this.types.push(new settings.type[i](settings));
  }
  BaseType.apply(this, arguments);
}

util.inherits(MultipleType, BaseType);
module.exports = MultipleType;

MultipleType.prototype._checkType = function _checkType(value) {
  var isValid = false;
  for(var i= 0, l= this.types.length;i<l;i++) {
    isValid = isValid || this.types[i]._checkType(value);
  }
  return isValid;
};

MultipleType.prototype.typeDesc = function typeDesc() {
  var descs = [];
  for(var i= 0, l= this.types.length;i<l;i++) {
    descs.push(this.types[i].typeDesc());
  }
  return '['+descs.join(', ')+']';
};
