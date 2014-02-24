var async = require('async');
var middlewares = require('./middlewares');
var error = require('json-rpc2').Error;
var util = require('util');
var types = require('./types');

var dummy = function () {
};

var setup = function setup(func, options) {

  options.implemented = (options.implemented !== false && func !== dummy);

  options.args = options.args || [];
  options.middlewares = options.middlewares || [];

  for (var i = options.middlewares.length - 1; i >= 0; i--) {
    if (options.middlewares[i].args) {
      options.args = options.middlewares[i].args.concat(options.args);
    }
  }

  var mStack = [middlewares.args(options.args)].concat(options.middlewares);

  var handler;
  if (options.implemented) {
    handler = function handler(args, opts, callback) {
      var o = {orig: args};
      return async.applyEachSeries(
        mStack,
        o, opts,
        function (err) {
          if (err) {
            return callback(err);
          }
          return func(o, opts, callback);
        }
      );
    };
  } else {
    handler = function handler(args, opts, callback) {
      callback(new error.NotImplemented());
    };
  }

  handler.__rpcWrapped = true;
  handler.func = func;
  handler.implemented = options.implemented;
  handler.argsDescr = options.args;
  handler.desc = options.desc;
  handler.response = options.response;
  handler.example = options.example;
  handler.mode = options.mode;
  return handler;
};

var describe = function describe(func) {

  var res = {};
  if (func.__rpcWrapped) {
    if (func.desc) {
      res.desc = func.desc;
    }
    if (func.response) {
      res.response = func.response;
    }
    if (func.example) {
      res.example = func.example;
    }
    if (func.mode) {
      res.mode = func.mode;
    }
    if (func.argsDescr) {
      var arg;
      var a = [];
      for (var i = 0, l = func.argsDescr.length; i < l; i++) {
        var argDescr = func.argsDescr[i];
        if (typeof(argDescr) === 'string') {
          a.push({name: argDescr});
        } else if (util.isArray(argDescr)) {
          arg = new types.multiple(argDescr);
          a.push({name: argDescr.name, required: arg.isRequired(),
            type      : arg.typeDesc(), default: arg.defaultValue(), desc: arg.desc() });
        } else {
          arg = new argDescr.type(argDescr);
          a.push({name: argDescr.name, required: arg.isRequired(),
            type      : arg.typeDesc(), default: arg.defaultValue(), desc: arg.desc() });
        }
      }
      res.arguments = a;
    }
  }
  return res;
};

module.exports.dummy = dummy;
module.exports.setup = setup;
module.exports.describe = describe;
