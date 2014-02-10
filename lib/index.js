module.exports.utils = require('./utils');
module.exports.types = require('./types');
module.exports.middlewares = require('./middlewares');
module.exports.Error = require('json-rpc2').Error;
module.exports.Server = require('json-rpc2').Server;
module.exports.Client = require('json-rpc2').Client
module.exports.mode = {
  READ  : 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4,
  NOTIFY: 5
};