var util = require('util');
var BaseType = require('./base');

/**********************************************************
 DateTime
 ***********************************************************/

function DateTimeType() {
  BaseType.apply(this, arguments);
}
util.inherits(DateTimeType, BaseType);

module.exports = DateTimeType;




