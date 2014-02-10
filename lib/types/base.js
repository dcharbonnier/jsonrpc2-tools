var errors = require('json-rpc2').Error;

function BaseType(settings) {
  this._desc = settings.desc || null;
  this._name = settings.name;
  this._required = settings.required || false;
  if (typeof(settings.default) === 'undefined') {
    this._defaultValue = null;
  } else {
    this._defaultValue = settings.default;
  }

  if (typeof this._defaultValue === 'function') {
    this._value = this._defaultValue();
  } else {
    this._value = this._defaultValue;
  }
}
BaseType.prototype.name = function () {
  return this._name;
};

BaseType.prototype.desc = function () {
  return this._desc;
};

BaseType.prototype.set = function (v) {
  this._value = this.check(v);
};

BaseType.prototype.get = function () {
  return this._value;
};

BaseType.prototype.isRequired = function isRequired() {
  return this._required;
};
BaseType.prototype.defaultValue = function defaultValue() {
  if (typeof this._defaultValue === 'function') {
    return (/\W*function\s+([\w\$]+)\(/.exec(this._defaultValue.toString())[ 1 ]) + '()';
  } else {
    return this._defaultValue;
  }
};
BaseType.prototype.check = function check(value) {
  if ((value === null || value === undefined)) {
    if (this.isRequired()) {
      throw new errors.InvalidParams(this._name + ' is required');
    } else {
      if (typeof this._defaultValue === 'function') {
        return this._defaultValue();
      } else {
        return this._defaultValue;
      }
    }
  } else {
    if (this._checkType(value)) {
      return value;
    } else {
      throw new errors.InvalidParams(this._name + ' validation error (' + value + ')');
    }
  }
};
BaseType.prototype._checkType = function _checkType() {
  return  true;
};
BaseType.prototype.typeDesc = function typeDesc() {
  return (/\W*function\s+([\w\$]+)Type\(/.exec(this.constructor.toString())[ 1 ]);
};
module.exports = BaseType;
