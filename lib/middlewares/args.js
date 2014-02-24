var types = require('../types');
var util = require('util');

module.exports = function argsHandler(argsDescr) {
  return function argsHandler(args, opts, callback) {
    for (var i = 0, l = argsDescr.length; i < l; i++) {
      var argDescr = argsDescr[i];
      if (typeof(argDescr) === 'string') {
        argDescr = new types.Base({name: argDescr});
      } else if (util.isArray(argDescr.type)) {
        argDescr = new types.Multiple(argDescr);
      } else {
        argDescr = new argDescr.type(argDescr);
      }
      if (args.orig instanceof Array) {
        args[argDescr.name()] = argDescr.check(args.orig[i]);
      } else {
        args[argDescr.name()] = argDescr.check(args.orig[argDescr.name()]);
      }
    }
    callback();
  };
};